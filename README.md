# Electron-forge React Hooks

### main.js
Uygulama genel ayarlar dosyasıdır. Uygulama içindeki ekran ayarlarını buradan alır.

### preloader.js
Uygulama başlamadan önce, web tarafında node js komutlarını çalıştırmak için bu dosya kullanılır. Web tarafı ile node js motoru arasında bilgi paylaşımı sağlar.
Electron 5 ve öncesindeki güvenlik zaafiyetleri gerekçesi ile contextBridge ile izole edilmiştir. Uygulama başlarken contextBridge ile uygulama maini ve react kodları arasında köprü oluşturmak gerekir. Bu köprü sayesinde main tarafından ipc ile bildiri geldiğinde react hookları tetiklenebilir.

### renderer.js
React uygulamasını bağladığımız yer. React için gerekli index.js dosyası buraya import edilmeli veya react içindeki index.js kodları direk buraya yazılmalı.
