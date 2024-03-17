# React Projesi - Movies App
Bu proje, React ve TypeScript kullanılarak geliştirilmiş bir web uygulamasıdır. Uygulama, modern web geliştirme pratiklerini ve çeşitli React özelliklerini kullanarak kullanıcı dostu bir film listeleme ve favori film yönetimi sunar.

## Önkoşullar
Projeyi çalıştırmak için aşağıdaki araçların sistemde yüklü olması gerekmektedir:

- Node.js (v18.0 veya üzeri)
- npm veya yarn

## Kurulum
Projeyi local sisteminize klonlayın:
```bash
git clone https://github.com/yarkinucerler/react-tutorial.git
```
#### Proje dizinine gidin:
```bash
cd client
````

#### Bağımlılıkları kurun:
```bash
npm install
```
veya
```bash 
yarn install 
```
#### Uygulamayı geliştirme modunda çalıştırın:

```bash
npm start
```
veya
```bash
yarn start
```
Bu komutlar, uygulamayı **localhost:8080** adresinde çalıştırır.

# Middleware

Proje içeriğinde mock server yardımı ile api similasyonu yapılmıştır.
Middleware kurulumu için aşağıdaki adımları izleyebilirsiniz

## Kurulum

#### Proje dizinine gidin:
```bash
cd middleware
````
**Yukarıdaki "Bağımlılıkları kurun" ve "Uygulamayı geliştirme modunda çalıştırın" adımlarını tekrarlayarak middleware kurulumunu hızlıca yapabilirsiniz**   

Bu komutlar, uygulamayı **localhost:3000** adresinde çalıştırır.

## Kullanılan Teknolojiler

- React: Kullanıcı arayüzü geliştirme kütüphanesi.
- TypeScript: JavaScript için bir süper set, statik tip denetimi sunar. 
- React Router v6: SPA (Single Page Application) yönlendirme kütüphanesi. 
- Context API: Uygulama genelinde state yönetimi için kullanılır.

## Özellikler

- Film Listeleme: API'den gelen film verilerini listeler.
- Favori Filmler: Kullanıcıların favori filmlerini seçmelerine ve bu seçimleri yerel depolamada saklamalarına olanak tanır.  
- Dinamik Rotalama: React Router kullanılarak dinamik sayfa yönlendirmesi yapılır. 
- Arama ve Filtreleme: Kullanıcıların film listesini arama terimlerine ve çeşitli filtre seçeneklerine göre filtrelemelerini sağlar.
