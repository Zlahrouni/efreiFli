import React, { useState } from 'react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

const SecuritySection = () => {
  const [formData, setFormData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [successMessage, setSuccessMessage] = useState('');

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      oldPassword: '',
      newPassword: '',
      confirmPassword: ''
    };

    // Validation ancien mot de passe
    if (!formData.oldPassword) {
      newErrors.oldPassword = 'L\'ancien mot de passe est requis';
      isValid = false;
    }

    // Validation nouveau mot de passe
    if (!formData.newPassword) {
      newErrors.newPassword = 'Le nouveau mot de passe est requis';
      isValid = false;
    } else if (formData.newPassword.length < 8) {
      newErrors.newPassword = 'Le mot de passe doit contenir au moins 8 caractères';
      isValid = false;
    } else if (!/(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])/.test(formData.newPassword)) {
      newErrors.newPassword = 'Le mot de passe doit contenir au moins une majuscule, une minuscule et un chiffre';
      isValid = false;
    }

    // Validation confirmation mot de passe
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'La confirmation du mot de passe est requise';
      isValid = false;
    } else if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Les mots de passe ne correspondent pas';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage('');

    if (validateForm()) {
      // Simulation de succès
      setSuccessMessage('Mot de passe modifié avec succès');
      setFormData({
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Réinitialiser le message d'erreur pour ce champ
    setErrors(prev => ({
      ...prev,
      [name]: ''
    }));
    // Réinitialiser le message de succès
    setSuccessMessage('');
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold mb-6">Sécurité et confidentialité</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Ancien mot de passe */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Ancien mot de passe
          </label>
          <input
            type="password"
            name="oldPassword"
            value={formData.oldPassword}
            onChange={handleChange}
            className={`w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 
              ${errors.oldPassword ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.oldPassword && (
            <div className="flex items-center gap-1 mt-1">
              <AlertCircle className="h-4 w-4 text-red-500" />
              <p className="text-sm text-red-500">{errors.oldPassword}</p>
            </div>
          )}
        </div>

        {/* Nouveau mot de passe */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nouveau mot de passe
          </label>
          <input
            type="password"
            name="newPassword"
            value={formData.newPassword}
            onChange={handleChange}
            className={`w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 
              ${errors.newPassword ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.newPassword && (
            <div className="flex items-center gap-1 mt-1">
              <AlertCircle className="h-4 w-4 text-red-500" />
              <p className="text-sm text-red-500">{errors.newPassword}</p>
            </div>
          )}
        </div>

        {/* Confirmation du nouveau mot de passe */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Confirmer le nouveau mot de passe
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className={`w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 
              ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.confirmPassword && (
            <div className="flex items-center gap-1 mt-1">
              <AlertCircle className="h-4 w-4 text-red-500" />
              <p className="text-sm text-red-500">{errors.confirmPassword}</p>
            </div>
          )}
        </div>

        {/* Message de succès */}
        {successMessage && (
          <div className="flex items-center gap-2 p-4 text-green-700 bg-green-50 border border-green-200 rounded">
            <CheckCircle2 className="h-5 w-5" />
            <p>{successMessage}</p>
          </div>
        )}

        <div className="flex justify-end pt-4">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Modifier le mot de passe
          </button>
        </div>
      </form>
    </div>
  );
};

export default SecuritySection;