import { useEffect, useRef } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const LOGO = 'https://cdn.poehali.dev/files/03922f62-7868-456b-97fb-5b78c2e4c6d2.png';
const PHOTO_HERO = 'https://cdn.poehali.dev/projects/bb8cdabf-7fb4-4d38-9a77-012855de8f33/bucket/de74bd73-e5ef-4745-a40a-5ce5c0abe548.png';
const PHOTO_ABOUT = 'https://cdn.poehali.dev/projects/bb8cdabf-7fb4-4d38-9a77-012855de8f33/bucket/e8f51df6-e349-4a2c-9b76-3104d9137d24.png';
const PHOTO_STUDIO = 'https://cdn.poehali.dev/files/5be20489-321f-4f55-a7c2-cf7cf18a228e.png';
const PHOTO_PORTRAIT = 'https://cdn.poehali.dev/files/2a773e3f-fb16-41f3-9b16-28838049ecc2.png';

const useReveal = () => {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
};

const nav = [
  { id: 'about', label: 'Обо мне' },
  { id: 'results', label: 'Результаты' },
  { id: 'experience', label: 'Опыт' },
  { id: 'skills', label: 'Компетенции' },
  { id: 'cases', label: 'Кейсы' },
  { id: 'services', label: 'Услуги' },
  { id: 'contact', label: 'Контакты' },
];

const metrics = [
  { value: '360%', label: 'рост прибыли агентства', icon: 'TrendingUp' },
  { value: '11.4x', label: 'ROI маркетинговых вложений', icon: 'Target' },
  { value: '150M+', label: 'бюджетов под управлением, ₽', icon: 'Wallet' },
  { value: '20M+', label: 'охват рекламных кампаний', icon: 'Radio' },
  { value: '+92%', label: 'рост конверсии в продажу', icon: 'MousePointerClick' },
  { value: '16+', label: 'лет в стратегическом маркетинге', icon: 'Award' },
];

const experience = [
  {
    period: '2026 — н.в.',
    role: 'CMO / Директор по маркетингу',
    company: 'АО «С+»',
    url: 'https://softplus.systems/',
    points: [
      'Стратегическая ответственность за маркетинг и рост компании',
      'Построение и трансформация маркетинговой функции на data-driven подход',
      'Внедрение AI и автоматизации в маркетинговые процессы',
      'Управление командой и кросс-функциональным взаимодействием',
    ],
  },
  {
    period: '2025 — 2026',
    role: 'CMO / Директор по маркетингу',
    company: 'Notamedia',
    url: 'https://integrator.nota.media/',
    points: [
      'Разработка маркетинговой стратегии на 2026–2029 годы',
      'Перестройка позиционирования и команды маркетинга',
      'Перестройка маркетинга и метрик эффективности',
      'Запуск каналов продвижения, включая Generative Engine Optimization',
    ],
  },
  {
    period: '2020 — 2025',
    role: 'CMO / Зам. директора по развитию бизнеса',
    company: 'АО «ФИНТЕХ»',
    url: 'https://www.fintech.ru/',
    points: [
      'Полная трансформация маркетинговой функции и внедрение data-driven подхода',
      'Разработка и защита комплексной маркетинговой стратегии на 2026–2029 годы',
      'Вывод на рынок ключевых IT-продуктов',
      'Построение эффективного взаимодействия маркетинга с продажами и продуктом',
    ],
  },
  {
    period: '2009 — 2020',
    role: 'Директор по маркетингу и развитию бизнеса',
    company: 'Seven A Studio',
    url: 'https://7astudio.ru/',
    points: [
      'Трансформация агентства из стартапа в ведущего федерального подрядчика',
      'Рост прибыли компании на 360% за один год',
      'Реализация федеральных кампаний для Sony Pictures Television, Gillette, Philips, Nestle, ВТБ и др.',
      'Полное управление маркетинговыми бюджетами до 150 млн ₽ в год',
    ],
  },
];

const skills = [
  { icon: 'BrainCircuit', title: 'Стратегический маркетинг', desc: 'Архитектура роста: позиционирование, GTM, юнит-экономика.' },
  { icon: 'Bot', title: 'AI & Automation', desc: 'Внедрение ИИ в маркетинг и операционные процессы.' },
  { icon: 'BarChart3', title: 'Data-driven рост', desc: 'Сквозная аналитика, атрибуция, управление на данных.' },
  { icon: 'Building2', title: 'B2B / B2G', desc: 'Сложные циклы сделок, тендеры, корпоративные продажи.' },
  { icon: 'Users', title: 'Управление командами', desc: 'Найм, мотивация и развитие маркетинговых команд.' },
  { icon: 'Rocket', title: 'Продуктовый вывод', desc: 'Go-to-market и масштабирование новых продуктов.' },
];

const cases = [
  {
    tag: 'Federal',
    title: 'Федеральные кампании',
    desc: 'Для крупнейших мировых брендов с охватом 20М+.',
    img: 'https://cdn.poehali.dev/projects/bb8cdabf-7fb4-4d38-9a77-012855de8f33/bucket/73427c02-9215-48fa-9351-6c4307b20920.png',
  },
  {
    tag: '+360%',
    title: 'Seven A Studio',
    desc: 'От фриланс студии до крупнейшего маркетингового агентства.',
    img: 'https://cdn.poehali.dev/projects/bb8cdabf-7fb4-4d38-9a77-012855de8f33/bucket/85bd1202-27d4-4813-a55c-74de9a8bf560.png',
  },
  {
    tag: 'IT-продукт',
    title: 'Операционная система «СинтезМ»',
    desc: 'Упаковка и вывод на рынок высокотехнологичного IT продукта.',
    img: 'https://cdn.poehali.dev/projects/bb8cdabf-7fb4-4d38-9a77-012855de8f33/bucket/7ddc3706-b5f7-44ec-b011-b9f439949086.png',
  },
  {
    tag: 'Вирусный запуск',
    title: 'Запуск игры «Лихие 90-е»',
    desc: 'Культовая игра, которая покорила социальные сети.',
    img: 'https://cdn.poehali.dev/projects/bb8cdabf-7fb4-4d38-9a77-012855de8f33/bucket/1445eecf-f406-4d03-ae5c-565b3a34c989.png',
  },
];

const services = [
  { icon: 'Crown', title: 'Fractional CMO', desc: 'Маркетинговый директор на part-time с фокусом на результат.', highlight: true },
  { icon: 'Layers', title: 'Аутсорсинг маркетинга', desc: 'Полное управление маркетинговой функцией под ключ.' },
  { icon: 'Compass', title: 'Стратегия роста', desc: 'Разработка и реализация маркетинговой стратегии.' },
  { icon: 'Rocket', title: 'Go-to-Market', desc: 'Запуск новых продуктов и выход на новые рынки.' },
  { icon: 'SearchCheck', title: 'Аудит и трансформация', desc: 'Диагностика и перестройка маркетинговой функции.' },
  { icon: 'Bot', title: 'AI-внедрение', desc: 'Автоматизация и ИИ в маркетинге и продажах.' },
];

const Index = () => {
  useReveal();
  const headerRef = useRef<HTMLElement>(null);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <div className="ambient-orbs" aria-hidden="true"><span /></div>
      {/* Header */}
      <header ref={headerRef} className="fixed top-0 inset-x-0 z-50 glass border-b border-border/60">
        <div className="max-w-[1600px] mx-auto px-5 md:px-10 h-16 md:h-20 flex items-center justify-between">
          <button onClick={() => scrollTo('hero')} className="flex items-center gap-3 group">
            <img src={LOGO} alt="A" className="h-8 md:h-10 w-auto" />
            <span className="hidden sm:block font-mono-tech text-xs tracking-[0.3em] text-muted-foreground group-hover:text-foreground transition-colors">
              АХМАДЬЯРОВ
            </span>
          </button>
          <nav className="hidden lg:flex items-center gap-7">
            {nav.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {n.label}
              </button>
            ))}
          </nav>
          <Button onClick={() => scrollTo('contact')} className="rounded-full font-medium btn-gradient border-0 text-white">
            Обсудить
            <Icon name="ArrowRight" size={16} className="ml-1" />
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-16">
        <div className="absolute inset-0 tech-grid opacity-60" style={{ animation: 'grid-pan 24s linear infinite' }} />
        <div className="absolute inset-0 radial-glow" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

        <div className="relative max-w-[1600px] mx-auto px-5 md:px-10 grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center w-full">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 mb-7">
              <span className="size-2 rounded-full bg-primary animate-pulse" />
              <span className="font-mono-tech text-xs tracking-[0.25em] text-primary">FRACTIONAL CMO · ENTERPRISE LEVEL</span>
            </div>

            <h1 className="text-4xl md:text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6">
              <span className="text-gradient">Амир Ахмадьяров</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-8">
              Строю системы маркетинга, которые обеспечивают
              <span className="text-foreground font-medium"> предсказуемый рост бизнеса</span> и максимальную
              окупаемость инвестиций. 16+ лет опыта на уровне Enterprise в IT, GovTech и сложных B2C/B2B/B2G-проектах.
            </p>

            <div className="flex flex-wrap gap-2.5 mb-10">
              {['16+ лет', 'Системный маркетинг', 'Data-driven', 'AI', 'B2B / B2G', 'Growth'].map((t) => (
                <span key={t} className="rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Button onClick={() => scrollTo('contact')} size="lg" className="rounded-full text-base h-13 px-8 py-6 btn-gradient border-0 text-white">
                Обсудить сотрудничество
                <Icon name="ArrowRight" size={18} className="ml-1" />
              </Button>
              <Button onClick={() => scrollTo('results')} size="lg" variant="outline" className="rounded-full text-base h-13 px-8 py-6 border-border">
                Смотреть результаты
              </Button>
            </div>

            <div className="lg:hidden relative mt-8 animate-fade-in">
              <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full" />
              <div className="relative rounded-3xl overflow-hidden border border-border shadow-2xl" style={{ height: '380px' }}>
                <img src={PHOTO_HERO} alt="Амир Ахмадьяров" className="w-full h-full object-cover object-top" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block animate-float-slow">
            <div className="absolute -inset-6 bg-primary/20 blur-3xl rounded-full" />
            <div className="relative rounded-3xl overflow-hidden border border-border shadow-2xl" style={{ height: '660px' }}>
              <img src={PHOTO_HERO} alt="Амир Ахмадьяров" className="w-full h-full object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 md:py-32 border-t border-border/50">
        <div className="max-w-[1600px] mx-auto px-5 md:px-10 grid lg:grid-cols-2 gap-14 items-center">
          <div className="reveal order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden border border-border">
              <img src={PHOTO_ABOUT} alt="Амир Ахмадьяров" className="w-full h-[480px] object-cover" />
            </div>
          </div>
          <div className="reveal order-1 lg:order-2">
            <p className="font-mono-tech text-xs tracking-[0.3em] text-primary mb-4">// ОБО МНЕ</p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Маркетинг, который реально увеличивает прибыль и стоимость компании
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-3">
              16+ лет я помогаю IT- и GovTech-компаниям строить системы маркетинга, которые дают
              <span className="text-foreground font-medium"> предсказуемый рост выручки</span> и максимальную окупаемость маркетинговых инвестиций.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Не креатив ради креатива, а чёткие механизмы привлечения клиентов, повышения конверсий и масштабирования бизнеса.
            </p>
            <ul className="space-y-4">
              {[
                'Сотни успешно реализованных проектов в России и за рубежом',
                'Построение маркетинговых функций и команд с нуля в крупных IT-компаниях',
                'Запуск и масштабирование продуктов с выходом на федеральные и международные рынки',
                'Глубокая экспертиза в data-driven маркетинге, AI и автоматизации',
                'Опыт управления маркетинговыми бюджетами от десятков до сотен миллионов рублей',
              ].map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <Icon name="Check" size={14} />
                  </span>
                  <span className="text-foreground/90">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Results */}
      <section id="results" className="py-24 md:py-32 relative border-t border-border/50">
        <div className="absolute inset-0 radial-glow opacity-50" />
        <div className="relative max-w-[1600px] mx-auto px-5 md:px-10">
          <div className="reveal text-center max-w-2xl mx-auto mb-16">
            <p className="font-mono-tech text-xs tracking-[0.3em] text-primary mb-4">// РЕЗУЛЬТАТЫ В ЦИФРАХ</p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Цифры, которые говорят за себя</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {metrics.map((m, i) => (
              <div
                key={m.label}
                className="reveal group rounded-2xl border border-border bg-card p-8 hover:border-primary/50 transition-all duration-500 hover:-translate-y-1"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon name={m.icon} size={22} />
                  </span>
                  <span className="font-mono-tech text-xs text-muted-foreground">0{i + 1}</span>
                </div>
                <div className="text-4xl md:text-5xl font-extrabold text-gradient mb-2">{m.value}</div>
                <p className="text-muted-foreground">{m.label}</p>
              </div>
            ))}
          </div>
          <p className="reveal text-center text-sm text-muted-foreground mt-10 font-mono-tech">
            Часть данных представлена обобщённо в связи с NDA
          </p>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-24 md:py-32 border-t border-border/50">
        <div className="max-w-[1600px] mx-auto px-5 md:px-10">
          <div className="reveal mb-16">
            <p className="font-mono-tech text-xs tracking-[0.3em] text-primary mb-4">// ОПЫТ РАБОТЫ</p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Путь от кампаний к системам</h2>
          </div>
          <div className="space-y-5">
            {experience.map((e, i) => (
              <div
                key={i}
                className="reveal grid md:grid-cols-[200px_1fr] gap-6 rounded-2xl border border-border bg-card p-7 md:p-9 hover:border-primary/40 transition-colors"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div>
                  <span className="font-mono-tech text-sm text-primary">{e.period}</span>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-1">{e.role}</h3>
                  <a href={e.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors mb-5 group">
                    {e.company}
                    <Icon name="ExternalLink" size={13} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                  </a>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {e.points.map((p) => (
                      <li key={p} className="flex items-start gap-2.5 text-sm text-foreground/80">
                        <Icon name="ChevronRight" size={16} className="mt-0.5 text-primary shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 md:py-32 border-t border-border/50">
        <div className="max-w-[1600px] mx-auto px-5 md:px-10">
          <div className="reveal mb-16">
            <p className="font-mono-tech text-xs tracking-[0.3em] text-primary mb-4">// КОМПЕТЕНЦИИ</p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight max-w-3xl">Мои компетенции — системный маркетинг для роста бизнеса</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skills.map((s, i) => (
              <div
                key={s.title}
                className="reveal group relative rounded-2xl border border-border bg-card p-8 overflow-hidden hover:border-primary/50 transition-all duration-500"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="absolute -right-8 -top-8 size-24 rounded-full bg-primary/0 group-hover:bg-primary/10 blur-2xl transition-colors duration-500" />
                <span className="relative flex size-13 w-13 h-13 items-center justify-center rounded-xl bg-primary/10 text-primary mb-5">
                  <Icon name={s.icon} size={24} />
                </span>
                <h3 className="relative text-xl font-bold mb-2">{s.title}</h3>
                <p className="relative text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-24 md:py-32 relative border-t border-border/50">
        <div className="absolute inset-0 tech-grid opacity-30" />
        <div className="relative max-w-4xl mx-auto px-5 md:px-10 text-center reveal">
          <Icon name="Quote" size={48} className="mx-auto text-primary/40 mb-8" />
          <blockquote className="text-2xl md:text-4xl font-bold leading-snug tracking-tight">
            «Маркетинг, который приносит<br />
            реальную прибыль,<br />
            а&nbsp;не только красивые отчёты.»
          </blockquote>
          <p className="mt-8 font-mono-tech text-sm tracking-[0.25em] text-muted-foreground">ПРИНЦИП БРЕНДА</p>
        </div>
      </section>

      {/* Training */}
      <section id="training" className="py-24 md:py-32 border-t border-border/50">
        <div className="max-w-[1600px] mx-auto px-5 md:px-10 grid lg:grid-cols-2 gap-14 items-center">
          <div className="reveal">
            <p className="font-mono-tech text-xs tracking-[0.3em] text-primary mb-4">// АВТОРСКИЕ ПРОГРАММЫ И ТРЕНИНГИ</p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
              Автор программы<br />«Digital Маркетинг 3.0»
            </h2>

            <div className="rounded-2xl border border-primary/30 bg-primary/5 p-7 mb-8">
              <div className="flex items-center gap-3 mb-5">
                <span className="flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <Icon name="GraduationCap" size={22} />
                </span>
                <div>
                  <p className="font-semibold text-lg">Digital Маркетинг 3.0</p>
                  <p className="text-sm text-muted-foreground font-mono-tech">АВТОРСКАЯ ПРОГРАММА</p>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  'Полноценная авторская программа по стратегическому маркетингу для руководителей и собственников',
                  'Сочетание глубокого стратегического мышления, data-driven инструментов и практического внедрения',
                  'Фокус на построении систем, которые реально увеличивают прибыль и масштабируют бизнес',
                  'Готовые frameworks, разбор реальных кейсов и рабочие инструменты',
                ].map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-foreground/90">
                    <Icon name="Check" size={15} className="mt-0.5 text-primary shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-sm font-mono-tech tracking-wider text-muted-foreground mb-4">ДОПОЛНИТЕЛЬНО ПРОВОЖУ:</p>
              <div className="space-y-3">
                {[
                  { icon: 'Building2', text: 'Корпоративные тренинги и мастер-классы по стратегическому маркетингу' },
                  { icon: 'UserCheck', text: 'Индивидуальное наставничество для CMO и CEO' },
                  { icon: 'Layers', text: 'Воркшопы по построению маркетинговой функции, внедрению AI и data-driven подходов' },
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon name={item.icon} size={17} />
                    </span>
                    <span className="text-sm text-foreground/90 leading-relaxed">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="reveal">
            <div className="relative rounded-3xl overflow-hidden border border-border shadow-2xl">
              <img
                src="https://cdn.poehali.dev/projects/bb8cdabf-7fb4-4d38-9a77-012855de8f33/bucket/c413a5aa-6030-46cb-a472-66c2794a3b3c.png"
                alt="Авторские программы — Амир Ахмадьяров"
                className="w-full h-[560px] object-cover object-left md:object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-flex items-center gap-2 rounded-full bg-primary/90 text-primary-foreground text-sm font-semibold px-4 py-2">
                  <Icon name="Mic" size={16} />
                  Спикер и эксперт
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cases */}
      <section id="cases" className="py-24 md:py-32 border-t border-border/50">
        <div className="max-w-[1600px] mx-auto px-5 md:px-10">
          <div className="reveal mb-16">
            <p className="font-mono-tech text-xs tracking-[0.3em] text-primary mb-4">// КЕЙСЫ И ДОСТИЖЕНИЯ</p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Избранные проекты</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {cases.map((c, i) => (
              <div
                key={c.title}
                className="reveal group relative rounded-3xl overflow-hidden border border-border h-[360px]"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <img src={c.img} alt={c.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
                <div className="relative h-full flex flex-col justify-end p-8">
                  <span className="self-start rounded-full bg-primary/90 text-primary-foreground text-xs font-semibold px-3 py-1 mb-3 font-mono-tech">
                    {c.tag}
                  </span>
                  <h3 className="text-2xl font-bold mb-2">{c.title}</h3>
                  <p className="text-muted-foreground">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 md:py-32 border-t border-border/50">
        <div className="max-w-[1600px] mx-auto px-5 md:px-10">
          <div className="reveal mb-16">
            <p className="font-mono-tech text-xs tracking-[0.3em] text-primary mb-4">// ФОРМАТЫ СОТРУДНИЧЕСТВА</p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Как мы можем работать</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <div
                key={s.title}
                className={`reveal rounded-2xl border p-8 transition-all duration-500 hover:-translate-y-1 ${
                  s.highlight
                    ? 'border-primary bg-primary/10 shadow-lg shadow-primary/10'
                    : 'border-border bg-card hover:border-primary/40'
                }`}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <span className={`flex size-12 items-center justify-center rounded-xl mb-5 ${s.highlight ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary'}`}>
                  <Icon name={s.icon} size={22} />
                </span>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-bold">{s.title}</h3>
                  {s.highlight && <span className="font-mono-tech text-[10px] tracking-wider text-primary border border-primary/40 rounded px-1.5 py-0.5">ОСНОВНОЙ</span>}
                </div>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 md:py-32 relative border-t border-border/50">
        <div className="absolute inset-0 radial-glow opacity-60" />
        <div className="relative max-w-[1600px] mx-auto px-5 md:px-10 grid lg:grid-cols-2 gap-14 items-center">
          <div className="reveal">
            <p className="font-mono-tech text-xs tracking-[0.3em] text-primary mb-4">// КОНТАКТЫ</p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Давайте обсудим наше сотрудничество
            </h2>
            <p className="text-lg text-muted-foreground mb-3 max-w-lg">
              Расскажите о задаче — отвечу Вам в течение 3 рабочих дней.
            </p>
            <p className="text-lg text-muted-foreground mb-10 max-w-lg">
              Готов к работе в Москве, регионах и с распределёнными командами.
            </p>
            <div className="space-y-4">
              {[
                { icon: 'Phone', label: 'Телефон', value: '+7 (495) 663-94-17', href: 'tel:+74956639417' },
                { icon: 'Mail', label: 'Email', value: 'hello@ahmadiarov.ru', href: 'mailto:hello@ahmadiarov.ru' },
                { icon: 'Send', label: 'Telegram', value: '@nextyb', href: 'https://t.me/nextyb' },
                { icon: 'MapPin', label: 'Локация', value: 'Москва — готов к командировкам', href: null },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-4 rounded-xl border border-border bg-card p-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon name={c.icon} size={20} />
                  </span>
                  <div>
                    <p className="text-xs text-muted-foreground font-mono-tech">{c.label}</p>
                    {c.href ? (
                      <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="font-medium hover:text-primary transition-colors">
                        {c.value}
                      </a>
                    ) : (
                      <p className="font-medium">{c.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal">
            <div className="relative rounded-3xl overflow-hidden border border-border shadow-2xl">
              <img
                src="https://cdn.poehali.dev/projects/bb8cdabf-7fb4-4d38-9a77-012855de8f33/bucket/676ceca5-560a-4983-9848-09a76fa9e348.png"
                alt="Амир Ахмадьяров — выступление"
                className="w-full h-[560px] object-cover object-left md:object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-12">
        <div className="max-w-[1600px] mx-auto px-5 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={LOGO} alt="A" className="h-9 w-auto" />
            <div>
              <p className="font-semibold">Амир Ахмадьяров</p>
              <p className="font-mono-tech text-xs text-muted-foreground tracking-wider">FRACTIONAL CMO</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} · Маркетинг как инженерная дисциплина</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;