import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  currentSlide = 0; // Current active slide index
  autoSlideInterval: any;

  slides = [
    {
      image: 'assets/1.png',
      title: 'شلالات إجوازو (Iguazu Falls) -الأرجنتين والبرازيل',
      subTitle: 'شلالات إجوازو (Iguazu Falls)',
      description:
        'مجموعة مذهلة من الشلالات تمتد على الحدود بين الأرجنتين والبرازيل، محاطة بالغابات الاستوائية الكثيفة. تُعد واحدة من أعظم عجائب الطبيعة، حيث تتدفق المياه بقوة وسط ضباب ساحر.',
      link: '#',
    },
    {
      image: 'assets/2.png',
      title: 'جبل ماترهورن (Matterhorn) - سويسرا وإيطاليا',
      subTitle: 'جبل ماترهورن (Matterhorn)',
      description:
        'أحد أشهر القمم الجبلية في العالم، يتميز بشكله الهرمي المهيب وقممه المغطاة بالثلوج. تحيط به المراعي الخضراء والبحيرات النقية، مما يجعله وجهة خيالية لعشاق الجبال.',
      link: '#',
    },
    {
      image: 'assets/3.png',
      title: '"وادي القمر" او وادي رم (Wadi Rum) - الأردن',
      subTitle: '"وادي القمر" او وادي رم (Wadi Rum)',
      description:
        'صحراء ساحرة تعرف باسم "وادي القمر"، تحتوي على تشكيلات صخرية فريدة وكثبان رملية حمراء. يعتبر المكان مثاليًا لاستكشاف الطبيعة والتأمل تحت سماء مليئة بالنجوم.',
      link: '#',
    },
    {
      image: 'assets/4.png',
      title: 'جزيرة سكاي (Isle of Skye) - اسكتلندا',
      subTitle: 'جزيرة سكاي (Isle of Skye)',
      description:
        'جزيرة خلابة تشتهر بالمناظر الطبيعية الدرامية، من الجبال والوديان إلى البحيرات والشواطئ. توفر تجربة استثنائية لمحبي المغامرات والمشي في الطبيعة.',
      link: '#',
    },
    {
      image: 'assets/5.png',
      title: 'غابة الأمازون المطيرة (Amazon Rainforest) - أمريكا الجنوبية',
      subTitle: 'غابة الأمازون المطيرة (Amazon Rainforest)',
      description:
        'أكبر غابة استوائية في العالم، موطن لأنواع لا حصر لها من النباتات والحيوانات. تتميز بتنوعها الحيوي الهائل، وشلالاتها الخفية، وأنهارها العظيمة مثل نهر الأمازون.',
      link: '#',
    },
  ];

  ngOnInit(): void {
    this.startAutoSlide();
  }
  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
  }

  startAutoSlide(): void {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 6000); // Change slide every 3 seconds
  }

  stopAutoSlide(): void {
    clearInterval(this.autoSlideInterval);
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }
}
