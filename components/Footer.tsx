import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-white border-t border-industrial-200 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-industrial-900 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                W
                </div>
                <span className="font-semibold text-xl tracking-tight text-industrial-900">
                {t.companyName}
                </span>
            </div>
            <p className="text-industrial-500 text-sm leading-relaxed mb-6">
              {t.footer.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold text-industrial-900 mb-6">{t.footer.navTitle}</h4>
            <ul className="space-y-4">
              {t.nav.items.map(link => (
                <li key={link.label}>
                  <a href={link.href} className="text-industrial-500 hover:text-industrial-900 text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h4 className="font-semibold text-industrial-900 mb-6">{t.footer.contactTitle}</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="text-industrial-400 shrink-0 mt-1" size={20} />
                <span className="text-industrial-600 text-sm max-w-xs">{t.contact.address}</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="text-industrial-400 shrink-0" size={20} />
                <div className="flex flex-col">
                  {t.contact.details.phones.map((phone, i) => (
                    <a key={i} href={`tel:${phone}`} className="text-industrial-600 text-sm hover:text-industrial-900">{phone}</a>
                  ))}
                </div>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="text-industrial-400 shrink-0" size={20} />
                <div className="flex flex-col">
                  {t.contact.details.emails.map((email, i) => (
                    <a key={i} href={`mailto:${email}`} className="text-industrial-600 text-sm hover:text-industrial-900">{email}</a>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-industrial-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-industrial-400">
            {t.footer.rights}
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-industrial-400 hover:text-industrial-600">{t.footer.privacy}</a>
            <a href="#" className="text-xs text-industrial-400 hover:text-industrial-600">{t.footer.terms}</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;