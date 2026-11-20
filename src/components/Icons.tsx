import React from 'react';

// Official & crisp SVG logos for DevOps tools and certifications

export const KubernetesLogo = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L3 7.2V16.8L12 22L21 16.8V7.2L12 2Z" fill="#326CE5"/>
    <path d="M12 4.3L5 8.35V15.65L12 19.7L19 15.65V8.35L12 4.3Z" fill="#2955B6"/>
    <circle cx="12" cy="12" r="3.2" fill="white"/>
    <circle cx="12" cy="12" r="1.6" fill="#326CE5"/>
    <path d="M12 6.5V9.5M12 14.5V17.5M7.2 9.25L9.8 10.75M14.2 13.25L16.8 14.75M7.2 14.75L9.8 13.25M14.2 10.75L16.8 9.25" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);

export const CKABadgeLogo = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="46" fill="#0D1B2A" stroke="#326CE5" strokeWidth="4"/>
    <circle cx="50" cy="50" r="40" fill="#1B263B" stroke="#00B4D8" strokeWidth="1.5" strokeDasharray="3 3"/>
    {/* Kubernetes Helm Wheel */}
    <g transform="translate(25, 16) scale(0.5)">
      <path d="M50 8L15 28V68L50 88L85 68V28L50 8Z" fill="#326CE5"/>
      <circle cx="50" cy="48" r="14" fill="white"/>
      <circle cx="50" cy="48" r="7" fill="#326CE5"/>
      <path d="M50 24V36M50 60V72M30 37L40 43M60 53L70 59M30 59L40 53M60 43L70 37" stroke="white" strokeWidth="4.5" strokeLinecap="round"/>
    </g>
    {/* CKA Banner Text */}
    <rect x="20" y="66" width="60" height="18" rx="4" fill="#326CE5"/>
    <text x="50" y="79" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="900" fontFamily="sans-serif" letterSpacing="1">CKA</text>
    <text x="50" y="93" textAnchor="middle" fill="#90E0EF" fontSize="6.5" fontWeight="700" fontFamily="sans-serif">KUBERNETES</text>
  </svg>
);

export const AWSSolutionsArchitectBadge = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Octagonal Shield */}
    <path d="M50 4L88 18V50C88 73 50 96 50 96C50 96 12 73 12 50V18L50 4Z" fill="#141E28" stroke="#FF9900" strokeWidth="3.5"/>
    <path d="M50 9L83 21V50C83 70 50 90 50 90C50 90 17 70 17 50V21L50 9Z" fill="#232F3E"/>
    {/* AWS Logo text & Smile Arrow */}
    <text x="50" y="36" textAnchor="middle" fill="#FFFFFF" fontSize="16" fontWeight="900" fontFamily="sans-serif">aws</text>
    <path d="M35 40C42 45 58 45 65 40" stroke="#FF9900" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M63 37L66 40L62 43" fill="#FF9900"/>
    {/* Badge Title */}
    <rect x="22" y="49" width="56" height="15" rx="3" fill="#FF9900"/>
    <text x="50" y="60" textAnchor="middle" fill="#141E28" fontSize="8" fontWeight="900" fontFamily="sans-serif" letterSpacing="0.5">CERTIFIED</text>
    <text x="50" y="74" textAnchor="middle" fill="#FFB84D" fontSize="6.5" fontWeight="800" fontFamily="sans-serif">SOLUTIONS ARCHITECT</text>
    <text x="50" y="82" textAnchor="middle" fill="#FFFFFF" fontSize="5.5" fontWeight="600" fontFamily="sans-serif">ASSOCIATE (SAA-C03)</text>
  </svg>
);

export const AWSCloudPractitionerBadge = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 4L88 18V50C88 73 50 96 50 96C50 96 12 73 12 50V18L50 4Z" fill="#141E28" stroke="#FF9900" strokeWidth="3.5"/>
    <path d="M50 9L83 21V50C83 70 50 90 50 90C50 90 17 70 17 50V21L50 9Z" fill="#232F3E"/>
    <text x="50" y="36" textAnchor="middle" fill="#FFFFFF" fontSize="16" fontWeight="900" fontFamily="sans-serif">aws</text>
    <path d="M35 40C42 45 58 45 65 40" stroke="#FF9900" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M63 37L66 40L62 43" fill="#FF9900"/>
    <rect x="22" y="49" width="56" height="15" rx="3" fill="#5A6B82"/>
    <text x="50" y="60" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="900" fontFamily="sans-serif" letterSpacing="0.5">CERTIFIED</text>
    <text x="50" y="74" textAnchor="middle" fill="#E2E8F0" fontSize="6.5" fontWeight="800" fontFamily="sans-serif">CLOUD PRACTITIONER</text>
    <text x="50" y="82" textAnchor="middle" fill="#FF9900" fontSize="5.5" fontWeight="600" fontFamily="sans-serif">FOUNDATIONAL</text>
  </svg>
);

export const AviatrixBadge = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="46" fill="#111827" stroke="#FF5500" strokeWidth="3.5"/>
    <circle cx="50" cy="50" r="39" fill="#1F2937" stroke="#FF7733" strokeWidth="1" strokeDasharray="2 2"/>
    {/* Aviatrix Wings Vector */}
    <path d="M50 25L32 46H42L50 36L58 46H68L50 25Z" fill="#FF5500"/>
    <path d="M50 39L38 53H45L50 47L55 53H62L50 39Z" fill="#FF8844"/>
    <rect x="18" y="60" width="64" height="16" rx="3" fill="#FF5500"/>
    <text x="50" y="71" textAnchor="middle" fill="#FFFFFF" fontSize="7" fontWeight="900" fontFamily="sans-serif" letterSpacing="0.5">AVIATRIX</text>
    <text x="50" y="83" textAnchor="middle" fill="#FED7AA" fontSize="6" fontWeight="700" fontFamily="sans-serif">MULTICLOUD NETWORK</text>
    <text x="50" y="90" textAnchor="middle" fill="#FFFFFF" fontSize="5.5" fontWeight="600" fontFamily="sans-serif">ASSOCIATE (2025-2028)</text>
  </svg>
);

export const CiscoLinuxBadge = ({ className = "w-12 h-12" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="46" fill="#0B132B" stroke="#0496FF" strokeWidth="3.5"/>
    <circle cx="50" cy="50" r="39" fill="#1C2541"/>
    {/* Cisco Bridge Lines */}
    <g transform="translate(35, 24)">
      <rect x="0" y="10" width="4" height="12" rx="2" fill="#0496FF"/>
      <rect x="7" y="5" width="4" height="17" rx="2" fill="#0496FF"/>
      <rect x="14" y="0" width="4" height="22" rx="2" fill="#0496FF"/>
      <rect x="21" y="5" width="4" height="17" rx="2" fill="#0496FF"/>
      <rect x="28" y="10" width="4" height="12" rx="2" fill="#0496FF"/>
    </g>
    <text x="50" y="58" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="900" fontFamily="sans-serif">NDG LINUX</text>
    <rect x="24" y="65" width="52" height="14" rx="3" fill="#0496FF"/>
    <text x="50" y="75" textAnchor="middle" fill="#FFFFFF" fontSize="7" fontWeight="800" fontFamily="sans-serif">ESSENTIALS</text>
    <text x="50" y="88" textAnchor="middle" fill="#6FFFE9" fontSize="6" fontWeight="700" fontFamily="sans-serif">CISCO ACADEMY</text>
  </svg>
);

export const DockerLogo = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 3H15V5H13V3ZM10 3H12V5H10V3ZM7 5H9V7H7V5ZM10 5H12V7H10V5ZM13 5H15V7H13V5ZM16 5H18V7H16V5ZM4 7H6V9H4V7ZM7 7H9V9H7V7ZM10 7H12V9H10V7ZM13 7H15V9H13V7ZM16 7H18V9H16V7ZM19 7H21V9H19V7ZM22.5 10C22.2 9.5 21.6 9.1 20.9 9.1C20.4 9.1 19.9 9.3 19.5 9.6C18.9 9.1 18.1 8.8 17.2 8.8H2C1.4 8.8 1 9.3 1 9.8V13.8C1 17.8 4.2 21 8.2 21C14.1 21 18.7 17.3 20.3 12.1C21.3 12.3 22.4 11.9 22.9 10.9C23 10.6 22.8 10.2 22.5 10Z" fill="#2496ED"/>
  </svg>
);

export const JenkinsLogo = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#D33833"/>
    <circle cx="12" cy="8" r="3.5" fill="#FFFFFF"/>
    <path d="M8 17C8 14 10 12.5 12 12.5C14 12.5 16 14 16 17H8Z" fill="#FFFFFF"/>
    <path d="M10 19H14V21H10V19Z" fill="#F0D6B7"/>
    <path d="M9 7.5L10 8.5M15 7.5L14 8.5" stroke="#D33833" strokeWidth="1"/>
  </svg>
);

export const PrometheusLogo = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#E6522C"/>
    <path d="M12 4C9 8 7 11 7 14C7 16.8 9.2 19 12 19C14.8 19 17 16.8 17 14C17 11 15 8 12 4Z" fill="#FFFFFF"/>
    <path d="M12 10C10.5 12 9.5 13.5 9.5 15C9.5 16.4 10.6 17.5 12 17.5C13.4 17.5 14.5 16.4 14.5 15C14.5 13.5 13.5 12 12 10Z" fill="#E6522C"/>
  </svg>
);

export const GrafanaLogo = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#F46800"/>
    <circle cx="12" cy="12" r="6" fill="#181B1F"/>
    <circle cx="12" cy="12" r="3" fill="#F46800"/>
    <path d="M12 2A10 10 0 0 1 22 12" stroke="#FFFFFF" strokeWidth="1.5"/>
  </svg>
);

export const TerraformLogo = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="3" width="6" height="6" rx="1" fill="#7B42BC"/>
    <rect x="9" y="7" width="6" height="6" rx="1" fill="#844FBA"/>
    <rect x="16" y="11" width="6" height="6" rx="1" fill="#5C4EE5"/>
    <rect x="9" y="15" width="6" height="6" rx="1" fill="#844FBA"/>
  </svg>
);
