/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import CV from './pages/CV';
import Projets from './pages/Projets';
import Laboratoire from './pages/Laboratoire';
import Passions from './pages/Passions';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/projets" element={<Projets />} />
          <Route path="/laboratoire" element={<Laboratoire />} />
          <Route path="/passions" element={<Passions />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}
