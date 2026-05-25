/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { COLORS } from '../constants';

export default function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="https://financiamotor.com/wp-content/uploads/2026/05/LOGO-PLATA2.png" 
        alt="Financia Motor Logo" 
        className="h-20 md:h-24 w-auto object-contain"
        referrerPolicy="no-referrer"
      />
    </div>
  );
}
