import React from 'react'

import { AppHero } from "../components/home/Hero";
import { AppAbout } from '../components/home/About';
import { AppFeature } from '../components/home/Feature';
import { AppWorks } from '../components/home/Works';
import { AppFaq } from '../components/home/Faq';
import { AppPricing } from '../components/home/Pricing';
import { AppContact } from '../components/home/Contact';

export function AppHome() {
    return(
        <div className="main">
            <AppHero />
            <AppAbout />
            <AppFeature />
            <AppWorks />
            <AppFaq />
            <AppPricing />
            <AppContact />
        </div>
    );
}