import React, { useState } from 'react';
import { 
  User, 
  CreditCard, 
  Settings, 
  Bell, 
  Shield, 
  PlayCircle,
  ChevronRight
} from 'lucide-react';
import './styles.css';
import SecuritySection from './security-section';

const Admin = () => {
  const [activeSection, setActiveSection] = useState('personal');

  const sidebarItems = [
    { id: 'personal', label: 'Informations personnelles', icon: User },
    { id: 'payment', label: 'Informations bancaires', icon: CreditCard },
    { id: 'security', label: 'Sécurité et confidentialité', icon: Shield },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'playback', label: 'Paramètres de lecture', icon: PlayCircle },
    { id: 'preferences', label: 'Préférences', icon: Settings },
  ];

  const PersonalInfoSection = () => (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold mb-6">Informations personnelles</h2>
      <div className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Prénom</label>
            <input
              type="text"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Votre prénom"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
            <input
              type="text"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Votre nom"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="votre@email.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
          <input
            type="tel"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="+33 6 XX XX XX XX"
          />
        </div>
      </div>
    </div>
  );

  const PaymentInfoSection = () => (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold mb-6">Informations bancaires</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Numéro de carte</label>
          <input
            type="text"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="XXXX XXXX XXXX XXXX"
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Date d'expiration</label>
            <input
              type="text"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="MM/AA"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
            <input
              type="text"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="XXX"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Nom sur la carte</label>
          <input
            type="text"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Nom complet"
          />
        </div>
      </div>
    </div>
  );

  const renderSection = () => {
    switch (activeSection) {
      case 'personal':
        return <PersonalInfoSection />;
      case 'payment':
        return <PaymentInfoSection />;
      case 'security':
        return <SecuritySection />;
      default:
        return (
          <div className="flex items-center justify-center h-64 text-gray-500">
            Section en cours de développement
          </div>
        );
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admin MFE</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <div className="w-full md:w-64 shrink-0">
            <nav className="bg-gray-50 rounded-lg">
              {sidebarItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`w-full flex items-center justify-between p-3 text-left hover:bg-gray-100 rounded-lg transition-colors ${
                      activeSection === item.id
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="h-5 w-5" />
                      <span className="text-sm font-medium">{item.label}</span>
                    </div>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-gray-50 rounded-lg p-6">
              {renderSection()}
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;