import { LegalAuthority } from '@/types';

export const UK_LEGAL_AUTHORITIES: LegalAuthority[] = [
  {
    name: 'Office of Communications',
    acronym: 'Ofcom',
    role: 'UK communications regulator',
    category: 'official',
    officialUrl: 'https://www.ofcom.org.uk',
    description: 'The statutory authority regulating broadcast television, radio, and telecommunications services across the United Kingdom.'
  },
  {
    name: 'Intellectual Property Office',
    acronym: 'IPO',
    role: 'UK government intellectual property office (GOV.UK)',
    category: 'official',
    officialUrl: 'https://www.gov.uk/government/organisations/intellectual-property-office',
    description: 'The official UK government body responsible for intellectual property rights, copyright frameworks, and guidance on digital media use.'
  },
  {
    name: 'TV Licensing',
    acronym: 'TV Licensing',
    role: 'Administers the TV licence on behalf of the BBC',
    category: 'official',
    officialUrl: 'https://www.tvlicensing.co.uk',
    description: 'Administers the legal requirement under the Communications Act 2003 to hold a valid TV Licence when watching or recording live TV broadcasts on any channel or device in the UK.'
  },
  {
    name: 'Crown Prosecution Service',
    acronym: 'CPS',
    role: 'Public prosecution service for England and Wales',
    category: 'official',
    officialUrl: 'https://www.cps.gov.uk',
    description: 'Provides legal guidance regarding copyright infringement, fraud offences, and the prosecution of commercial copyright piracy.'
  },
  {
    name: 'Federation Against Copyright Theft',
    acronym: 'FACT',
    role: 'Industry anti-piracy organisation (not a government body)',
    category: 'industry',
    officialUrl: 'https://www.fact-uk.org.uk',
    description: 'Works with UK law enforcement, broadcast networks, and rights holders to investigate commercial copyright violations and raise consumer awareness.'
  }
];

export const LEGAL_DISCLAIMER_TEXT = 'The information provided on IPTV Strong UK is for general educational and technical guidance purposes only and does not constitute formal legal advice. IPTV Strong UK encourages all consumers to stream lawfully through authorized channels and adhere to applicable UK broadcast licensing laws.';
