import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const contactInfo = [
  { icon: '📍', title: 'Visit Us', lines: ['FoodRush HQ, Bandra Kurla Complex', 'Mumbai, Maharashtra 400051'], color: '#FF3D00' },
  { icon: '📞', title: 'Call Us', lines: ['+91 98765 43210', 'Mon–Sat, 9AM to 9PM'], color: '#10B981' },
  { icon: '📧', title: 'Email Us', lines: ['hello@foodrush.in', 'support@foodrush.in'], color: '#FFC300' },
  { icon: '🕐', title: 'Support Hours', lines: ['Customer Support: 24/7', 'Business Queries: 9AM–6PM'], color: '#8B5CF6' },
]

const faqs = [
  { q: 'How long does delivery take?', a: 'Our average delivery time is 22 minutes. You can track your order live on the map from the moment it\'s placed.' },
  { q: 'How do I become a restaurant partner?', a: 'Visit our Services page and click "Get Started". Our onboarding team will contact you within 24 hours — zero joining fee.' },
  { q: 'What areas do you deliver to?', a: 'We currently deliver across 50+ Indian cities including Mumbai, Delhi, Bangalore, Pune, Hyderabad and more.' },
  { q: 'How do I track my order?', a: 'Once your order is confirmed, the app shows a live map with your rider\'s location and real-time ETA.' },
  { q: 'What payment methods are accepted?', a: 'We accept UPI, credit/debit cards, wallets (Paytm, PhonePe), and cash on delivery.' },
]

function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  const onSubmit = (data) => {
    console.log('Contact form:', data)
    setSubmitted(true)
    reset()
  }

  return (
    <div style={{ background: '#FAFAF8', fontFamily: "'Sora', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Playfair+Display:ital,wght@1,700&display=swap');
        @keyframes fadeUp { from{opacity:0;transform:translateY(24px);}to{opacity:1;transform:translateY(0);} }
        @keyframes checkPop { 0%{transform:scale(0);}70%{transform:scale(1.2);}100%{transform:scale(1);} }
        .contact-input {
          width: 100%; padding: 14px 16px 14px 46px;
          background: #F9FAFB; border: 2px solid #E5E7EB;
          border-radius: 14px; font-size: 15px;
          font-family: 'Sora', sans-serif; color: #111827;
          outline: none; transition: border 0.2s, box-shadow 0.2s;
        }
        .contact-input:focus {
          border-color: #FF3D00; background: #fff;
          box-shadow: 0 0 0 4px rgba(255,61,0,0.1);
        }
        .contact-input.err { border-color: #EF4444; }
        .contact-textarea {
          width: 100%; padding: 14px 16px;
          background: #F9FAFB; border: 2px solid #E5E7EB;
          border-radius: 14px; font-size: 15px; min-height: 130px;
          font-family: 'Sora', sans-serif; color: #111827;
          outline: none; resize: vertical;
          transition: border 0.2s, box-shadow 0.2s;
        }
        .contact-textarea:focus {
          border-color: #FF3D00; background: #fff;
          box-shadow: 0 0 0 4px rgba(255,61,0,0.1);
        }
        .send-btn {
          width: 100%; padding: 16px; background: #FF3D00; color: #fff;
          border: none; border-radius: 14px; font-size: 16px; font-weight: 700;
          font-family: 'Sora', sans-serif; cursor: pointer;
          transition: all 0.2s ease; box-shadow: 0 8px 24px rgba(255,61,0,0.35);
        }
        .send-btn:hover { background: #e53500; transform: translateY(-2px); }
        .info-card { transition: transform 0.25s ease; cursor: default; }
        .info-card:hover { transform: translateY(-4px); }
        .faq-row { transition: background 0.2s ease; cursor: pointer; }
        .faq-row:hover { background: #FFF0ED !important; }
      `}</style>

      {/* Hero */}
      <section style={c.hero}>
        <div style={c.blob1} /><div style={c.blob2} />
        <div style={c.heroInner}>
          <span style={c.eyebrow}>💬 Get In Touch</span>
          <h1 style={c.heroTitle}>
            We'd love to<br />
            <span style={c.accent}>hear from you</span>
          </h1>
          <p style={c.heroSub}>
            Questions, feedback, partnership inquiries or just a wave — our team responds within 2 hours.
          </p>
          <div style={c.heroStats}>
            {[['⚡', '2hr', 'Avg response time'], ['😊', '98%', 'Satisfaction rate'], ['🌐', '50+', 'Cities covered']].map(([icon, val, lbl]) => (
              <div key={lbl} style={c.heroStat}>
                <span style={{ fontSize: '22px' }}>{icon}</span>
                <div>
                  <p style={c.heroStatVal}>{val}</p>
                  <p style={c.heroStatLbl}>{lbl}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact info cards */}
      <section style={c.infoSection}>
        <div style={c.infoGrid}>
          {contactInfo.map(info => (
            <div key={info.title} className="info-card" style={c.infoCard}>
              <div style={{ ...c.infoIconBox, background: info.color + '18' }}>
                <span style={{ fontSize: '28px' }}>{info.icon}</span>
              </div>
              <h3 style={c.infoTitle}>{info.title}</h3>
              {info.lines.map(l => <p key={l} style={c.infoLine}>{l}</p>)}
            </div>
          ))}
        </div>
      </section>

      {/* Main: form + map side */}
      <section style={c.mainSection}>
        {/* Left — Form */}
        <div style={c.formWrap}>
          <h2 style={c.formTitle}>Send us a message</h2>
          <p style={c.formSub}>Fill out the form and our team will get back to you within 2 hours.</p>

          {submitted ? (
            <div style={c.successBox}>
              <span style={{ fontSize: '64px', display: 'block', marginBottom: '16px', animation: 'checkPop 0.5s ease' }}>✅</span>
              <h3 style={c.successTitle}>Message sent!</h3>
              <p style={c.successDesc}>We'll get back to you within 2 hours.</p>
              <button onClick={() => setSubmitted(false)} style={c.sendAgainBtn}>Send another message</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>

              {/* Name row */}
              <div style={{ display: 'flex', gap: '14px' }}>
                <ContactField label="First name" icon="👤" placeholder="Rahul"
                  error={errors.firstName}
                  inputProps={register('firstName', {
                    required: 'Required',
                    pattern: { value: /^[A-Za-z]{2,}$/, message: 'Letters only, min 2' },
                  })} />
                <ContactField label="Last name" icon="👤" placeholder="Sharma"
                  error={errors.lastName}
                  inputProps={register('lastName', {
                    required: 'Required',
                    pattern: { value: /^[A-Za-z]{2,}$/, message: 'Letters only, min 2' },
                  })} />
              </div>

              <ContactField label="Email address" icon="📧" placeholder="rahul@example.com"
                error={errors.email}
                inputProps={register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,
                    message: 'Enter a valid email',
                  },
                })} />

              <ContactField label="Phone (optional)" icon="📱" placeholder="9876543210"
                error={errors.phone}
                inputProps={register('phone', {
                  pattern: { value: /^[6-9]\d{9}$/, message: 'Valid 10-digit number' },
                })} />

              {/* Topic */}
              <div>
                <label style={c.label}>Topic</label>
                <div style={{ position: 'relative' }}>
                  <span style={c.fieldIcon}>🏷️</span>
                  <select
                    className={`contact-input ${errors.topic ? 'err' : ''}`}
                    {...register('topic', { required: 'Please select a topic' })}
                    style={{ appearance: 'none', paddingLeft: '46px' }}
                  >
                    <option value="">Select a topic...</option>
                    {['General Inquiry', 'Order Issue', 'Restaurant Partnership', 'Rider Application', 'FoodRush Pro', 'Catering & Events', 'Feedback', 'Other'].map(o => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </div>
                {errors.topic && <ErrMsg msg={errors.topic.message} />}
              </div>

              {/* Message */}
              <div>
                <label style={c.label}>Your message</label>
                <textarea
                  placeholder="Tell us how we can help..."
                  className={`contact-textarea ${errors.message ? 'err' : ''}`}
                  {...register('message', {
                    required: 'Message is required',
                    minLength: { value: 20, message: 'Please write at least 20 characters' },
                  })}
                />
                {errors.message && <ErrMsg msg={errors.message.message} />}
              </div>

              <button type="submit" className="send-btn">
                Send Message 🚀
              </button>
            </form>
          )}
        </div>

        {/* Right — Office visual + socials */}
        <div style={c.rightSide}>
          <div style={c.officeCard}>
            <div style={c.officeHeader}>
              <span style={{ fontSize: '48px' }}>🏢</span>
              <div>
                <h3 style={c.officeTitle}>Mumbai HQ</h3>
                <p style={c.officeAddr}>Bandra Kurla Complex, Mumbai</p>
              </div>
            </div>
            <div style={c.mapPlaceholder}>
              <span style={{ fontSize: '48px' }}>🗺️</span>
              <p style={{ fontSize: '14px', color: '#9CA3AF', margin: '8px 0 0 0' }}>Interactive map</p>
            </div>
            <div style={c.officeDetails}>
              {[['Mon–Fri', '9:00 AM – 8:00 PM'], ['Saturday', '10:00 AM – 6:00 PM'], ['Sunday', 'Closed (Support 24/7)']].map(([day, time]) => (
                <div key={day} style={c.officeRow}>
                  <span style={c.officeDay}>{day}</span>
                  <span style={c.officeTime}>{time}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={c.socialCard}>
            <p style={c.socialTitle}>Follow us on</p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {[['🌐', 'Website', '#FF3D00'], ['📘', 'Facebook', '#1877F2'], ['📸', 'Instagram', '#E4405F'], ['🐦', 'Twitter', '#1DA1F2']].map(([icon, label, color]) => (
                <div key={label} style={{ ...c.socialBtn, borderColor: color + '40', color }}>
                  <span>{icon}</span><span style={{ fontSize: '13px', fontWeight: 700 }}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={c.faqSection}>
        <div style={c.faqHeader}>
          <span style={c.eyebrowDark}>❓ FAQ</span>
          <h2 style={c.sectionTitle}>Frequently asked<br /><span style={c.accent}>questions</span></h2>
        </div>
        <div style={c.faqList}>
          {faqs.map((faq, i) => (
            <div key={i} className="faq-row"
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
              style={{
                ...c.faqRow,
                background: openFaq === i ? '#FFF0ED' : '#fff',
                borderColor: openFaq === i ? '#FDDCB5' : '#F3F4F6',
              }}>
              <div style={c.faqQ}>
                <h4 style={c.faqQText}>{faq.q}</h4>
                <span style={{ ...c.faqArrow, transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0)' }}>▾</span>
              </div>
              {openFaq === i && (
                <p style={c.faqA}>{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

function ContactField({ label, icon, placeholder, error, inputProps, type = 'text' }) {
  return (
    <div style={{ flex: 1 }}>
      <label style={{ fontSize: '13px', fontWeight: 700, color: '#374151', display: 'block', marginBottom: '6px', fontFamily: "'Sora', sans-serif" }}>
        {label}
      </label>
      <div style={{ position: 'relative' }}>
        <span style={c.fieldIcon}>{icon}</span>
        <input type={type} placeholder={placeholder}
          className={`contact-input ${error ? 'err' : ''}`}
          {...inputProps} />
      </div>
      {error && <ErrMsg msg={error.message} />}
    </div>
  )
}

function ErrMsg({ msg }) {
  return <p style={{ fontSize: '12px', color: '#EF4444', marginTop: '4px', fontWeight: 600, fontFamily: "'Sora', sans-serif" }}>⚠️ {msg}</p>
}

const c = {
  hero: {
    background: '#111827', minHeight: '70vh', position: 'relative', overflow: 'hidden',
    display: 'flex', alignItems: 'center', padding: '120px 6vw 80px',
  },
  blob1: {
    position: 'absolute', top: '-100px', right: '-80px', width: '500px', height: '500px',
    borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,61,0,0.2) 0%, transparent 70%)', pointerEvents: 'none',
  },
  blob2: {
    position: 'absolute', bottom: '-80px', left: '-60px', width: '350px', height: '350px',
    borderRadius: '50%', background: 'radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 70%)', pointerEvents: 'none',
  },
  heroInner: { position: 'relative', zIndex: 1, maxWidth: '660px' },
  eyebrow: {
    display: 'inline-block', background: 'rgba(255,61,0,0.15)', color: '#FF6B35',
    border: '1px solid rgba(255,61,0,0.3)', borderRadius: '999px',
    padding: '7px 18px', fontSize: '13px', fontWeight: 700, letterSpacing: '0.04em', marginBottom: '24px',
  },
  eyebrowDark: {
    display: 'inline-block', background: '#FFF0ED', color: '#FF3D00',
    borderRadius: '999px', padding: '7px 18px', fontSize: '13px',
    fontWeight: 700, letterSpacing: '0.04em', marginBottom: '16px',
  },
  heroTitle: {
    fontSize: 'clamp(36px, 6vw, 68px)', fontWeight: 800, color: '#F9FAFB',
    lineHeight: 1.08, margin: '0 0 20px 0', letterSpacing: '-0.03em',
  },
  accent: { color: '#FF3D00', fontFamily: "'Playfair Display', serif", fontStyle: 'italic' },
  heroSub: { fontSize: '17px', color: '#9CA3AF', lineHeight: 1.75, marginBottom: '36px', maxWidth: '500px' },
  heroStats: { display: 'flex', gap: '24px', flexWrap: 'wrap' },
  heroStat: {
    display: 'flex', gap: '12px', alignItems: 'center',
    background: '#1F2937', border: '1px solid #374151',
    borderRadius: '12px', padding: '12px 18px',
  },
  heroStatVal: { fontSize: '18px', fontWeight: 800, color: '#F9FAFB', margin: 0 },
  heroStatLbl: { fontSize: '11px', color: '#6B7280', margin: 0 },
  infoSection: { padding: '64px 6vw', background: '#fff', borderBottom: '1px solid #F3F4F6' },
  infoGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '20px', maxWidth: '1280px', margin: '0 auto' },
  infoCard: {
    background: '#FAFAF8', borderRadius: '20px', padding: '28px 24px',
    border: '1px solid #F3F4F6', boxShadow: '0 4px 16px rgba(0,0,0,0.05)',
  },
  infoIconBox: {
    width: '56px', height: '56px', borderRadius: '16px',
    display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px',
  },
  infoTitle: { fontSize: '16px', fontWeight: 800, color: '#111827', margin: '0 0 10px 0' },
  infoLine: { fontSize: '14px', color: '#6B7280', margin: '0 0 4px 0' },
  mainSection: {
    display: 'flex', gap: '48px', padding: '80px 6vw',
    background: '#FAFAF8', flexWrap: 'wrap', maxWidth: '1280px', margin: '0 auto',
  },
  formWrap: { flex: '1 1 400px' },
  formTitle: { fontSize: '28px', fontWeight: 800, color: '#111827', margin: '0 0 8px 0' },
  formSub: { fontSize: '15px', color: '#6B7280', marginBottom: '32px' },
  label: { fontSize: '13px', fontWeight: 700, color: '#374151', display: 'block', marginBottom: '6px', fontFamily: "'Sora', sans-serif" },
  fieldIcon: {
    position: 'absolute', left: '14px', top: '50%',
    transform: 'translateY(-50%)', fontSize: '17px', pointerEvents: 'none',
  },
  successBox: {
    textAlign: 'center', padding: '60px 20px', background: '#fff',
    borderRadius: '24px', border: '2px solid #D1FAE5',
  },
  successTitle: { fontSize: '24px', fontWeight: 800, color: '#111827', margin: '0 0 8px 0' },
  successDesc: { fontSize: '15px', color: '#6B7280', marginBottom: '24px' },
  sendAgainBtn: {
    background: '#FF3D00', color: '#fff', border: 'none',
    borderRadius: '12px', padding: '12px 24px', fontWeight: 700,
    fontSize: '14px', cursor: 'pointer', fontFamily: "'Sora', sans-serif",
  },
  rightSide: { flex: '0 0 340px', display: 'flex', flexDirection: 'column', gap: '20px' },
  officeCard: {
    background: '#fff', borderRadius: '24px', padding: '28px',
    border: '1px solid #F3F4F6', boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
  },
  officeHeader: { display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '20px' },
  officeTitle: { fontSize: '18px', fontWeight: 800, color: '#111827', margin: '0 0 4px 0' },
  officeAddr: { fontSize: '13px', color: '#6B7280', margin: 0 },
  mapPlaceholder: {
    background: '#F9FAFB', borderRadius: '16px', height: '140px',
    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
    border: '1px solid #F3F4F6', marginBottom: '20px',
  },
  officeDetails: { display: 'flex', flexDirection: 'column', gap: '10px' },
  officeRow: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  officeDay: { fontSize: '13px', fontWeight: 700, color: '#374151' },
  officeTime: { fontSize: '13px', color: '#6B7280' },
  socialCard: {
    background: '#fff', borderRadius: '20px', padding: '24px',
    border: '1px solid #F3F4F6', boxShadow: '0 4px 16px rgba(0,0,0,0.05)',
  },
  socialTitle: { fontSize: '14px', fontWeight: 800, color: '#111827', marginBottom: '14px' },
  socialBtn: {
    display: 'flex', gap: '8px', alignItems: 'center',
    border: '2px solid', borderRadius: '10px', padding: '8px 14px',
    cursor: 'pointer', fontSize: '18px',
  },
  faqSection: { padding: '80px 6vw', background: '#fff' },
  faqHeader: { textAlign: 'center', marginBottom: '48px' },
  sectionTitle: { fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#111827', lineHeight: 1.1, margin: 0 },
  faqList: { maxWidth: '720px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '10px' },
  faqRow: {
    borderRadius: '16px', padding: '20px 24px',
    border: '2px solid', transition: 'all 0.25s ease',
  },
  faqQ: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  faqQText: { fontSize: '16px', fontWeight: 700, color: '#111827', margin: 0 },
  faqArrow: { fontSize: '18px', color: '#FF3D00', transition: 'transform 0.3s ease', flexShrink: 0 },
  faqA: { fontSize: '14px', color: '#6B7280', lineHeight: 1.75, margin: '14px 0 0 0' },
}

export default Contact