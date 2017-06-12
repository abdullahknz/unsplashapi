import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class UnsplashServiceProvider {

  data:any;
  constructor(public http: Http) {
   
  }

  load() {
    //client_id yani app id set etmemiz gerekiyor.
    var client_id = 'buraya application id gelecek'
  
  if (this.data) {
    // datamız var mı diye kontrol ediyoruz.
    return Promise.resolve(this.data);
  }

  // henüz data yok ise bu kısım çalışır
  return new Promise(resolve => {
    // Burada api ya istek göndermek için Angular HTTP provider kullanıyoruz.
    // eğer data dönerse Json datamızı Json parse edip bir JSON objesi oluşturuyoruz.
    this.http.get('https://api.unsplash.com/photos/?per_page=30&client_id='+client_id)
      .map(res => res.json())
      .subscribe(data => {
        // eğer istek başarılı olursa dönen JSON verisini data değişkenine set ediyoruz.
        this.data = data;
        resolve(this.data);
      });
  });
}
}
