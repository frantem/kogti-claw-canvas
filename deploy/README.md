# Deployment Guide for KOGTI Nail Studio Website

This guide provides step-by-step instructions for deploying the KOGTI website to your server.

## Prerequisites

Ensure your server has the following installed:
```bash
sudo apt update
sudo apt install -y git nodejs npm nginx certbot python3-certbot-nginx zip
```

## Option A: Build on Server (Recommended)

### 1. Clone Repository
```bash
# Create directory and clone
sudo mkdir -p /var/www/kogti
cd /var/www/kogti
sudo git clone <YOUR_REPOSITORY_URL> .
```

### 2. Install Dependencies and Build
```bash
# Install dependencies
npm ci

# Build the project
npm run build
```

### 3. Configure Nginx
```bash
# Copy nginx configuration
sudo cp deploy/nginx.example.conf /etc/nginx/sites-available/kogti

# Enable the site
sudo ln -s /etc/nginx/sites-available/kogti /etc/nginx/sites-enabled/kogti

# Remove default nginx site
sudo rm -f /etc/nginx/sites-enabled/default

# Test configuration
sudo nginx -t

# Reload nginx
sudo systemctl reload nginx
```

### 4. Set Proper Permissions
```bash
# Set ownership
sudo chown -R www-data:www-data /var/www/kogti

# Set directory permissions
sudo find /var/www/kogti -type d -exec chmod 755 {} \;

# Set file permissions
sudo find /var/www/kogti -type f -exec chmod 644 {} \;
```

### 5. Verify HTTP Setup
```bash
# Check if site loads
curl -I http://kogtistudio.by/

# Expected response: HTTP/1.1 200 OK, Content-Type: text/html

# Check static assets
curl -I http://kogtistudio.by/assets/

# Expected response: Cache-Control headers for assets
```

### 6. Setup HTTPS with Let's Encrypt
```bash
# Run certbot
sudo certbot --nginx -d kogtistudio.by -d www.kogtistudio.by

# Follow the prompts to configure SSL
# Certbot will automatically update your nginx configuration
```

### 7. Final Verification
```bash
# Test HTTPS
curl -I https://kogtistudio.by/

# Check that HTTP redirects to HTTPS
curl -I http://kogtistudio.by/
```

## Option B: Build Locally and Upload

### 1. Build Locally
```bash
# On your local machine
npm ci
npm run build
npm run package:zip
```

### 2. Upload to Server
```bash
# Upload the generated site.zip to your server
scp dist.zip user@kogtistudio.by:/tmp/

# On server
sudo mkdir -p /var/www/kogti
cd /var/www/kogti
sudo unzip /tmp/dist.zip
sudo mv dist/* .
sudo rmdir dist
```

### 3. Follow Steps 3-7 from Option A

## Updating the Website

### For Git Deployment
```bash
cd /var/www/kogti
sudo git pull origin main
npm ci
npm run build
sudo systemctl reload nginx
```

### For Manual Upload
```bash
# Build locally and upload new site.zip
# On server:
cd /var/www/kogti
sudo rm -rf assets index.html # Remove old files
sudo unzip /tmp/new-site.zip
sudo chown -R www-data:www-data /var/www/kogti
```

## Troubleshooting

### White Screen Issues
1. Clear browser cache (hard refresh: Ctrl+Shift+R)
2. Try incognito/private browsing mode
3. Check browser console for errors (F12)

### Check Server Response
```bash
# Verify index.html is served
curl -sS http://kogtistudio.by/ | head -20

# Check static assets
curl -I http://kogtistudio.by/assets/index-*.js

# Check nginx error logs
sudo tail -f /var/log/nginx/error.log
```

### Common Issues
- **404 errors**: Check file permissions and nginx root path
- **Cache issues**: Verify Cache-Control headers are set correctly
- **SSL issues**: Re-run certbot if HTTPS doesn't work

## DNS Configuration

Ensure your domain points to your server:
```bash
# Check DNS resolution
nslookup kogtistudio.by
dig kogtistudio.by

# Should return your server's IP address
```

## Performance Monitoring

```bash
# Check nginx access logs
sudo tail -f /var/log/nginx/access.log

# Monitor server resources
htop
df -h
```

## Security Notes

- Keep nginx and certbot updated
- Monitor server logs regularly
- Consider enabling a firewall (ufw)
- Regular backups of website files

## Support

If you encounter issues:
1. Check nginx error logs: `sudo tail -f /var/log/nginx/error.log`
2. Verify file permissions and ownership
3. Test with curl commands provided above
4. Clear browser cache completely

## Fix: Корректный возврат HTTP 404 (для Яндекс.Вебмастера)

Если Яндекс.Вебмастер сообщает, что сайт некорректно возвращает 404, значит на сервере действует упрощённая SPA-конфигурация nginx, которая отдаёт `index.html` (со статусом 200) на любой путь. Нужно обновить конфиг до версии с белым списком маршрутов:

```bash
# 1. Скопировать обновлённый конфиг из репозитория
cd /var/www/kogti
sudo git pull origin main
sudo cp deploy/nginx.example.conf /etc/nginx/sites-available/kogti

# 2. Проверить и применить
sudo nginx -t
sudo systemctl reload nginx

# 3. Убедиться, что несуществующие пути возвращают 404
curl -I https://kogtistudio.by/non-existent-page-test
# Ожидаемый ответ: HTTP/2 404

# 4. А существующие маршруты — 200
curl -I https://kogtistudio.by/
curl -I https://kogtistudio.by/privacy
# Ожидаемый ответ: HTTP/2 200
```

Валидные маршруты (отдают 200): `/`, `/auth`, `/admin`, `/privacy`. Все остальные пути возвращают 404 со страницей `public/404.html`.

После исправления — в Яндекс.Вебмастере нажать «Проверить» в разделе с предупреждением.

## Quick fix: White screen (MIME type) after deploy

- Ensure Nginx serves the built site: `root /var/www/kogti/dist;` in your server block.
- Rebuild on server: `npm ci && npm run build` (dist folder must exist).
- Reload Nginx: `sudo nginx -t && sudo systemctl reload nginx`
- Self-check:
  - `curl -sS http://kogtistudio.by/ | grep -E "/assets/.+\\.js"`   # index.html must reference /assets/*.js, NOT /src/main.tsx
  - `curl -I http://kogtistudio.by/assets/ | grep -i "Content-Type"` # should be application/javascript for .js files
  - `curl -I http://kogtistudio.by/favicon.ico`                     # should be 200
- Hard refresh browser (Ctrl+Shift+R) or try incognito.
