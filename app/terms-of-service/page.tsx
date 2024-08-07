import { getSession } from "@session";

export default async function Page(){
    const session = await getSession();
  
    return (
        <div className="container mt-5">
            <h1 className="mb-4 text-large">Terms of Service</h1>
            <p><strong>Effective Date: 1st of August 2024</strong></p>
            <p>Welcome to Lustcord.com. By accessing or using our website, you agree to comply with and be bound by the following Terms of Service. Please read them carefully.</p>
            
            <h2 className="mt-4">1. Acceptance of Terms</h2>
            <p>By accessing or using Lustcord.com, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree with any part of these terms, you must not use our website.</p>

            <h2 className="mt-4">2. Eligibility</h2>
            <p>Lustcord.com is intended for users who are at least 18 years old. By using this website, you represent and warrant that you are 18 years of age or older.</p>

            <h2 className="mt-4">3. Account Registration and Security</h2>
            <p>To use Lustcord.com, you must log in using your Discord account via Discord OAuth. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.</p>

            <h2 className="mt-4">4. User Content</h2>
            <p>You may submit your Discord server and write descriptions for your server. By submitting content, you grant Lustcord.com a non-exclusive, worldwide, royalty-free license to use, display, and distribute your content in connection with the website. You retain all rights to your content.</p>

            <h2 className="mt-4">5. User Conduct</h2>
            <p>You agree to use Lustcord.com in compliance with all applicable laws and regulations. You are solely responsible for the content you submit. You agree not to:</p>
            <ul className="ms-4 list-group-numbered">
                <li className="list-group-item">Submit any content that is illegal, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, or otherwise objectionable.</li>
                <li className="list-group-item">Impersonate any person or entity or falsely state or otherwise misrepresent your affiliation with a person or entity.</li>
                <li className="list-group-item">Use the website to engage in any fraudulent or deceptive practices.</li>
            </ul>

            <h2 className="mt-4">6. Privacy Policy</h2>
            <p>Your use of Lustcord.com is also governed by our Privacy Policy, which is incorporated into these Terms of Service by reference. By using Lustcord.com, you consent to the collection and use of your information as described in the Privacy Policy.</p>

            <h2 className="mt-4">7. Third-Party Services</h2>
            <p>Lustcord.com uses Discord OAuth for user authentication. Your use of Discord is subject to Discord's terms of service and privacy policy. We are not responsible for the practices of any third-party service.</p>

            <h2 className="mt-4">8. Dispute Resolution</h2>
            <p>In the event of a dispute between users or between a user and Lustcord.com, we encourage you to contact us directly to seek a resolution. If a resolution cannot be reached, the dispute will be resolved through binding arbitration in accordance with Finnish laws. The arbitration will take place in Finland, and the decision of the arbitrator will be final and binding.</p>
            <h2 className="mt-4">9. Termination of Service</h2>
            <p>We reserve the right to terminate or suspend your access to Lustcord.com, without prior notice or liability, for any reason, including if you breach these Terms of Service or our content guidelines.</p>

            <h2 className="mt-4">10. Changes to the Terms of Service</h2>
            <p>We may modify these Terms of Service at any time. Any changes will be effective immediately upon posting on this page. Your continued use of Lustcord.com after any such changes constitutes your acceptance of the new Terms of Service.</p>

            <h2 className="mt-4">11. Contact Us</h2>
            <p>If you have any questions or concerns about these Terms of Service, please contact us at site[at]lustcord.com.</p>
        </div>
    )
  };