import {
  findAllByRole,
  render,
  screen,
} from '@testing-library/react';
import Scoops from './Scoops';

/*
! Seçiciler
? Komut [All] BySeçici

* Komut > get / find / query
* get => elementler DOM'da var ise kullanılır
* find => elementin ne zaman ekran basılacaği belli değilse // async
* query => element Dom'da yok ise ve koşula göre gelicekse kullanılır


* find: methodu async bir method olduğu için
* kullanılırken async await ile beraber kullanılmalı
*/

test("API'den gelen her kategori için ekrana bir kart basılır", async () => {
  render(<Scoops />);

  // bütün resimleri çek
  const images = await screen.findAllByRole('img', { name: 'cesit' });

  //   gelen resimlerin sayısının 4 olduğunu kontrol etme
  expect(images).toHaveLength(4);
});
