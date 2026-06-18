import React from 'react';
import { createRoot } from 'react-dom/client';
import { motion, useReducedMotion } from 'motion/react';
import { Broom, CalendarCheck, ChatCircleText, CheckCircle, City, Clock, HouseLine, MapPin, Phone, ShieldCheck, Sparkle, Star, UsersThree, WechatLogo } from '@phosphor-icons/react';
import './styles.css';

const WECHAT_URL = 'https://work.weixin.qq.com/ca/cawcdec55f12d9b1c8';
const XHS_URL = 'https://www.xiaohongshu.com/user/profile/67fb386a000000000e010a07?xsec_token=YBxP9RhaxvjtcCcNMLz_mUn91ATbZWHF_nnJGI4RHnkfI=&xsec_source=app_share&xhsshare=CopyLink&shareRedId=ODdIOTo9Njo2NzUyOTgwNjczOTc7NT86&apptime=1781775057&share_id=bd2ef5228cf947a8acb242b8b090c32f&wechatWid=adf54e4a212d7ca3dce71d8dc6b1d0d5&wechatOrigin=menu';
const PHONE = '9492798310';
const PHONE_LABEL = '949-279-8310';

const copy = {
  zh: {
    nav: ['为什么选择我们', '服务项目', '覆盖地区', '关于我们', '联系我们'],
    quote: '获取报价',
    call: '电话咨询',
    lang: '中文 / EN',
    heroTitle: '陈阿姨到家，为美国华人家庭提供安心省心的清洁服务',
    heroBody: '日常、深度、退租、开荒与商业清洁。多城市服务，企业微信快速确认报价。',
    heroSecondary: '为什么选择我们',
    promiseTitle: '找家政清洁，最重要的是安心',
    promiseBody: '服务前讲清楚，服务中认真做，服务后有人跟进。四个承诺帮助您放心预约。',
    promises: [
      ['价格安心', '服务前先沟通范围与需求，报价清楚，消费更放心。'],
      ['品质安心', '厨房、浴室、边角和死角重点处理，有问题及时沟通，可现场返工。'],
      ['时效安心', '按预约时间上门。如有变动，客服提前沟通并确认新安排。'],
      ['安全安心', '尊重客户隐私，不随意触碰私人物品，贵重物品轻拿轻放。']
    ],
    whyTitle: '不是临时转单，而是有流程的清洁服务',
    whyBody: '陈阿姨到家服务华人家庭、留学生、租房客户、房东和小型商业空间。我们重视沟通、细节、透明报价和售后跟进。',
    proof: ['筛选与培训后的阿姨体系', '客服确认需求和报价', '工具与清洁用剂按场景准备', '服务后反馈与售后跟进'],
    servicesTitle: '常见服务项目',
    servicesBody: '不同城市、房型、面积和污渍程度会影响报价。发送需求后，客服会为您确认服务范围和时间。',
    services: [
      ['日常清洁', '适合长期居住家庭、宝妈和忙碌上班族。可选择 Weekly、Bi-weekly 或 Monthly。'],
      ['深度清洁', '加强厨房油污、浴室水垢、边角死角和长期积灰区域。'],
      ['开荒清洁', '适合新房、装修后或首次入住前，重点处理粉尘与表面污渍。'],
      ['退租清洁', '适合搬家交房、留学生、公寓退租和房东验收准备。'],
      ['商业清洁', '办公室、店铺、工作室等小型商业空间，可按场地定制范围。'],
      ['定期清洁', '固定周期、稳定阿姨、长期维护，让家里持续保持干净。']
    ],
    processTitle: '从咨询到上门，流程清楚',
    steps: ['企业微信或电话咨询', '提交城市、房型、面积和需求', '客服确认范围与报价', '安排阿姨上门服务', '验收反馈与售后跟进'],
    casesTitle: '真实服务场景与客户反馈',
    casesBody: '精选真实清洁场景与客户反馈，更多案例可通过小红书官号查看。',
    citiesTitle: '覆盖多个华人家庭集中的城市',
    citiesBody: '不同城市均可咨询预约，客服会根据您的位置和需求安排服务。',
    aboutTitle: '理解华人家庭对清洁服务的细节要求',
    aboutBody: '我们希望长期服务好美国华人家庭。服务前把范围讲清楚，服务中认真处理细节，服务后持续跟进反馈。',
    faqTitle: '常见问题',
    faqs: [
      ['价格是固定的吗？', '价格会根据城市、房型、面积、清洁程度和服务项目综合评估。添加企业微信后，客服会为您清楚说明报价。'],
      ['可以当天预约吗？', '视城市和阿姨排期而定。建议先发送城市、房型和服务需求，客服会尽快确认。'],
      ['服务不满意怎么办？', '如果现场发现问题，请及时沟通。我们会安排跟进，能现场处理的问题尽量现场返工。'],
      ['会不会临时加价？', '服务前会先沟通范围和报价。若现场需求差异较大，会先说明再确认。']
    ],
    contactTitle: '确认价格，预约上门',
    contactBody: '添加企业微信，发送城市、房型和清洁需求，客服会为您确认报价和时间。',
    formTitle: '快速报价表单',
    fields: ['姓名', '所在城市', '房型或空间类型', '服务类型', '大概面积', '期望服务时间', '联系方式', '备注需求'],
    submit: '提交需求',
    submitNote: '已收到您的需求。客服会根据城市、房型和服务内容为您确认下一步安排。',
    serviceHelp: '不确定适合哪种清洁？告诉我们房型和重点区域，客服会帮您判断。',
    serviceHelpLink: '填写一次需求',
    cityAvailable: '可咨询',
    xhs: '查看更多真实案例'
  },
  en: {
    nav: ['Why Us', 'Services', 'Cities', 'About', 'Contact'],
    quote: 'Get a Quote',
    call: 'Call Now',
    lang: 'EN / 中文',
    heroTitle: 'Reliable home cleaning for Chinese families in the U.S.',
    heroBody: 'Standard, deep, move-out, post-renovation and small business cleaning. Message us on WeChat for a clear quote.',
    heroSecondary: 'Why Choose Us',
    promiseTitle: 'Cleaning service made clear and worry-free',
    promiseBody: 'We confirm the scope before service, clean with care, and follow up after the visit.',
    promises: [
      ['Transparent Pricing', 'We discuss your home, service scope and cleaning needs before the visit, so pricing feels clear from the start.'],
      ['Detail-Oriented Quality', 'Kitchens, bathrooms, corners and high-touch areas receive focused attention.'],
      ['On-Time Communication', 'Appointments are confirmed in advance. If timing changes, we communicate early.'],
      ['Respect for Your Home', 'We respect privacy and handle valuables and personal items with care.']
    ],
    whyTitle: 'A cleaning team with process, not one-off handoffs',
    whyBody: 'Aunt Chen at Home serves Chinese families, students, renters, landlords and small commercial spaces with clear communication and follow-up.',
    proof: ['Screened and trained cleaners', 'Customer service confirms needs and quotes', 'Tools prepared for each cleaning scenario', 'Feedback and after-service support'],
    servicesTitle: 'Cleaning Services',
    servicesBody: 'Quotes vary by city, home type, size and service needs. Send your details and we will confirm scope and timing.',
    services: [
      ['Standard Cleaning', 'For ongoing home maintenance. Weekly, bi-weekly and monthly options are available.'],
      ['Deep Cleaning', 'Focused work on grease, limescale, corners and areas that need extra attention.'],
      ['Post-Renovation Cleaning', 'For new homes or renovation dust before move-in.'],
      ['Move-Out Cleaning', 'For apartment handover, renters, students and landlords preparing for inspection.'],
      ['Commercial Cleaning', 'For offices, stores, studios and small business spaces with custom scopes.'],
      ['Recurring Cleaning', 'Fixed schedule, steady cleaners and long-term home maintenance.']
    ],
    processTitle: 'A clear path from quote to cleaning',
    steps: ['Contact us on WeChat or by phone', 'Share city, home type, size and needs', 'Confirm scope and quote', 'Schedule the cleaning team', 'Review, feedback and follow-up'],
    casesTitle: 'Real cleaning moments and customer feedback',
    casesBody: 'Browse selected cleaning scenes and customer feedback. More real examples are available on Xiaohongshu.',
    citiesTitle: 'Serving major Chinese communities across U.S. cities',
    citiesBody: 'Tell us your city and cleaning needs. Our team will help arrange the right service for your home.',
    aboutTitle: 'Built around the details Chinese families care about',
    aboutBody: 'We aim to serve families for the long term: clear scope before service, careful work during the visit, and follow-up after completion.',
    faqTitle: 'FAQ',
    faqs: [
      ['Are prices fixed?', 'Not entirely. City, home type, size, condition and requested service all affect the final quote.'],
      ['Can I book same-day cleaning?', 'It depends on the city and cleaner availability. Send your request and we will confirm as soon as possible.'],
      ['What if I am not satisfied?', 'Please let us know during the visit when possible. We will follow up and handle fixable issues on site.'],
      ['Will the price change on site?', 'We confirm the scope before service. If needs differ significantly, we explain and confirm before proceeding.']
    ],
    contactTitle: 'Confirm price and schedule a visit',
    contactBody: 'Add us on WeChat and send your city, home type and cleaning needs. We will confirm quote and timing.',
    formTitle: 'Quick Quote Form',
    fields: ['Name', 'City', 'Home or Space Type', 'Service Type', 'Approx. Size', 'Preferred Time', 'Contact', 'Notes'],
    submit: 'Submit Request',
    submitNote: 'We received your request. Our team will review your city, home type and service needs before following up.',
    serviceHelp: 'Not sure which service fits? Share your home type and priority areas, and we will help you choose.',
    serviceHelpLink: 'Send one request',
    cityAvailable: 'Available',
    xhs: 'View more real cases'
  }
};

const cityNames = ['Los Angeles / 洛杉矶', 'Boston / 波士顿', 'Chicago / 芝加哥', 'Philadelphia / 费城', 'New York / 纽约', 'Seattle / 西雅图', 'Bay Area / 湾区', 'San Jose / 圣何塞'];
const localImages: Record<string, string> = {
  'aunt-chen-clean-bright-kitchen': '/assets/hero-clean-home.webp',
  'cleaning-tools-blue-home-service': '/assets/tools-cleaning.webp',
  'aunt-chen-cleaning-before-after-kitchen': '/assets/kitchen-service.webp',
  'aunt-chen-carpet-cleaning-home': '/assets/carpet-cleaning.webp',
  'aunt-chen-team-cleaning-living-room': '/assets/bright-bedroom.webp',
  'friendly-asian-cleaning-team-blue-apron': '/assets/company-intro.webp',
  'office-brand': '/assets/office-brand.webp',
  'kitchen-counter': '/assets/kitchen-counter.webp',
  'sink-before-after': '/assets/sink-before-after.webp',
  'living-room': '/assets/living-room.webp',
  'logo': '/assets/logo.webp'
};
const image = (seed: string) => `${import.meta.env.BASE_URL}${localImages[seed].replace(/^\//, '')}`;
const pagePath = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;

function App() {
  const [lang, setLang] = React.useState<'zh' | 'en'>('zh');
  const [sent, setSent] = React.useState(false);
  const t = copy[lang];
  const reduce = useReducedMotion();
  const reveal = {};

  return <div className="site-shell">
    <header className="nav">
      <a className="brand" href="#top" aria-label="陈阿姨到家 home"><img className="brand-logo" src={image('logo')} alt="陈阿姨到家 logo" /><span>陈阿姨到家</span></a>
      <nav className="nav-links" aria-label="Main navigation">
        {['why', 'services', 'cities', 'about', 'contact'].map((id, i) => <a key={id} href={`#${id}`}>{t.nav[i]}</a>)}
      </nav>
      <div className="nav-actions"><button className="lang" onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}>{t.lang}</button><a className="btn btn-small" href={WECHAT_URL}>{t.quote}</a></div>
    </header>

    <main id="top">
      <section className="hero section-pad">
        <div className="hero-copy">
          <p className="eyebrow">AUNT CHEN HOME CLEANING</p>
          <h1>{t.heroTitle}</h1>
          <p className="hero-body">{t.heroBody}</p>
          <div className="cta-row"><a className="btn" href={WECHAT_URL}><WechatLogo weight="fill" />{t.quote}</a><a className="btn btn-ghost" href="#why">{t.heroSecondary}</a></div>
          <a className="phone-link" href={`tel:${PHONE}`}><Phone />{PHONE_LABEL}</a>
        </div>
        <div className="hero-media" aria-label="Professional cleaning service photo">
          <img src={image('aunt-chen-clean-bright-kitchen')} alt="清洁后明亮整洁的家庭厨房与餐桌" />
          <div className="floating-card"><CheckCircle weight="fill" /><span>{lang === 'zh' ? '服务前确认范围与报价' : 'Scope and quote confirmed first'}</span></div>
        </div>
      </section>

      <motion.section className="promise section-pad compact" {...reveal}>
        <div className="section-head centered"><h2>{t.promiseTitle}</h2><p>{t.promiseBody}</p></div>
        <div className="promise-grid">{t.promises.map(([title, body], i) => <article className="promise-card" key={title}><div className="icon-chip">{[<ShieldCheck />, <Sparkle />, <Clock />, <HouseLine />][i]}</div><h3>{title}</h3><p>{body}</p></article>)}</div>
      </motion.section>

      <motion.section id="why" className="why section-pad" {...reveal}>
        <div className="why-media"><img src={image('cleaning-tools-blue-home-service')} alt="清洁设备和工具准备现场" /></div>
        <div className="why-copy"><h2>{t.whyTitle}</h2><p>{t.whyBody}</p><div className="proof-list">{t.proof.map((item) => <div className="proof-item" key={item}><CheckCircle weight="fill" />{item}</div>)}</div></div>
      </motion.section>

      <motion.section id="services" className="services section-pad compact" {...reveal}>
        <div className="section-head"><h2>{t.servicesTitle}</h2><p>{t.servicesBody}</p></div>
        <div className="service-grid">{t.services.map(([title, body], i) => <article className={`service-card card-${i}`} key={title}><Broom /><h3>{title}</h3><p>{body}</p></article>)}</div>
        <div className="service-summary"><span>{t.serviceHelp}</span><a className="text-link" href="#contact">{t.serviceHelpLink}</a></div>
      </motion.section>

      <motion.section className="process section-pad" {...reveal}>
        <div className="process-panel"><h2>{t.processTitle}</h2><div className="steps">{t.steps.map((step, i) => <div className="step" key={step}><span>{String(i + 1).padStart(2, '0')}</span><p>{step}</p></div>)}</div></div>
      </motion.section>

      <motion.section className="cases section-pad compact" {...reveal}>
        <div className="section-head centered"><h2>{t.casesTitle}</h2><p>{t.casesBody}</p></div>
        <div className="case-grid">
          {[['aunt-chen-cleaning-before-after-kitchen', lang === 'zh' ? '厨房深度清洁' : 'Kitchen deep clean'], ['aunt-chen-carpet-cleaning-home', lang === 'zh' ? '地毯专项清洁' : 'Carpet cleaning'], ['sink-before-after', lang === 'zh' ? '水槽与细节清洁' : 'Sink and detail cleaning']].map(([seed, label]) => <figure key={seed}><img src={image(seed)} alt={label} /><figcaption>{label}</figcaption></figure>)}
        </div>
        <div className="review-strip">
          {[lang === 'zh' ? '沟通很清楚，报价前会问房型和重点区域。' : 'Communication was clear before the quote.', lang === 'zh' ? '退租前约的清洁，厨房和浴室处理得很细。' : 'The move-out cleaning covered kitchen and bath details well.', lang === 'zh' ? '客服会跟进反馈，比临时找人安心。' : 'The follow-up made the service feel much more reliable.'].map((r) => <blockquote key={r}><Star weight="fill" /><p>“{r}”</p></blockquote>)}
        </div>
        <div className="case-action"><a className="btn btn-contrast" href={XHS_URL}>{t.xhs}</a></div>
      </motion.section>

      <motion.section id="cities" className="cities section-pad" {...reveal}>
        <div className="city-intro"><City /><h2>{t.citiesTitle}</h2><p>{t.citiesBody}</p></div>
        <div className="city-grid">{cityNames.map((city) => <a href="#contact" className="city-card" key={city}><MapPin />{city}</a>)}</div>
      </motion.section>

      <motion.section id="about" className="about section-pad compact" {...reveal}>
        <div><h2>{t.aboutTitle}</h2><p>{t.aboutBody}</p><div className="about-stats"><div><UsersThree /><strong>{lang === 'zh' ? '团队服务' : 'Team service'}</strong></div><div><CalendarCheck /><strong>{lang === 'zh' ? '预约跟进' : 'Scheduled follow-up'}</strong></div><div><ChatCircleText /><strong>{lang === 'zh' ? '中文沟通' : 'Chinese support'}</strong></div></div></div>
        <img src={image('friendly-asian-cleaning-team-blue-apron')} alt="陈阿姨到家公司介绍与服务团队" />
      </motion.section>

      <motion.section className="faq section-pad compact" {...reveal}>
        <h2>{t.faqTitle}</h2>
        <div className="faq-list">{t.faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div>
      </motion.section>

      <section id="contact" className="contact section-pad">
        <div className="contact-card"><h2>{t.contactTitle}</h2><p>{t.contactBody}</p><div className="cta-row"><a className="btn" href={WECHAT_URL}><WechatLogo weight="fill" />{t.quote}</a><a className="btn btn-ghost" href={`tel:${PHONE}`}><Phone />{t.call}</a></div></div>
        <form className="quote-form" onSubmit={(e) => { e.preventDefault(); setSent(true); }}><h3>{t.formTitle}</h3>{t.fields.map((field, i) => i === 1 ? <label key={field}>{field}<select defaultValue=""><option value="" disabled>{lang === 'zh' ? '请选择所在城市' : 'Select your city'}</option>{cityNames.map((city) => <option key={city} value={city}>{city}</option>)}<option value="other">{lang === 'zh' ? '其他城市 / 先咨询' : 'Other city / Ask first'}</option></select></label> : i === 7 ? <label key={field}>{field}<textarea rows={4} /></label> : <label key={field}>{field}<input type="text" /></label>)}<p className="privacy-note">{lang === 'zh' ? '提交信息仅用于确认清洁服务报价、预约沟通和售后跟进。' : 'Submitted details are used only for quote confirmation, scheduling and service follow-up.'} <a href={pagePath('privacy-policy/')}>{lang === 'zh' ? '查看隐私政策' : 'View Privacy Policy'}</a></p><button className="btn" type="submit">{t.submit}</button>{sent && <p className="form-note">{t.submitNote}</p>}</form>
      </section>
    </main>

    <footer><div><strong>陈阿姨到家</strong><p>{lang === 'zh' ? '美国华人家庭信赖的家政清洁服务官网' : 'Home cleaning services for Chinese families in the U.S.'}</p></div><div><a href={pagePath('about/')}>{lang === 'zh' ? '关于我们' : 'About'}</a><a href={pagePath('contact/')}>{lang === 'zh' ? '联系我们' : 'Contact'}</a><a href={pagePath('privacy-policy/')}>{lang === 'zh' ? '隐私政策' : 'Privacy'}</a><a href={pagePath('terms/')}>{lang === 'zh' ? '服务条款' : 'Terms'}</a><a href={WECHAT_URL}>{t.quote}</a><a href={`tel:${PHONE}`}>{PHONE_LABEL}</a><a href={XHS_URL}>{t.xhs}</a></div></footer>
    <div className="mobile-bar"><a href={WECHAT_URL}>{t.quote}</a><a href={`tel:${PHONE}`}>{t.call}</a></div>
  </div>;
}

createRoot(document.getElementById('root')!).render(<App />);
