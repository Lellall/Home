import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Heading = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const SubHeading = styled.h2`
  font-size: 20px;
  margin-top: 20px;
`;

const List = styled.ul`
  list-style-type: disc;
  margin-left: 20px;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
`;

const Paragraph = styled.p`
  margin-bottom: 15px;
`;

const Link = styled.a`
  color: #007bff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const PrivacyPolicy = () => {
    const copyright = `\u00A9 All Rights Reserved. ${new Date().getFullYear()}, Lellall Technologies Limited`;

    return (
        <Container>
            <Heading>Terms and Conditions</Heading>
            <Paragraph>Welcome to LÉLLALL.COM. These terms and conditions outline the rules and regulations for the use of our platform.</Paragraph>

            <Paragraph>By accessing this website and using our services, we assume you accept these terms and conditions in full. Do not continue to use LÉLLALL's website or services if you do not accept all of the terms and conditions stated on this page.</Paragraph>

            <SubHeading>The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and any or all Agreements:</SubHeading>
            <List>
                <ListItem>"Client," "You," and "Your" refers to you, the person accessing this website and accepting LÉLLALL's terms and conditions.</ListItem>
                <ListItem>"LÉLLALL," "Ourselves," "We," "Our," and "Us" refers to our company.</ListItem>
                <ListItem>"Party," "Parties," or "Us" refers to both the Client and ourselves.</ListItem>
                <ListItem>"Service" refers to the services offered by LÉLLALL, including but not limited to the on-demand courier service, website, and any related features or functionalities.</ListItem>
                <ListItem>"Vendor" refers to local businesses or individuals offering goods or services through the LÉLLALL platform.</ListItem>
            </List>

            <SubHeading>Use of Our Platform:</SubHeading>
            <List>
                <ListItem>You agree to use LÉLLALL's services for lawful purposes only and in a manner consistent with all applicable laws and regulations.</ListItem>
                <ListItem>You are solely responsible for ensuring the accuracy and legality of any information you provide through the LÉLLALL platform.</ListItem>
                <ListItem>LÉLLALL reserves the right to refuse service, terminate accounts, or cancel orders at our discretion, including but not limited to cases of fraudulent or abusive behavior.</ListItem>
            </List>

            <SubHeading>Intellectual Property:</SubHeading>
            <List>
                <ListItem>All content included on the LÉLLALL platform, such as text, graphics, logos, images, audio clips, digital downloads, data compilations, and software, is the property of LÉLLALL or its content suppliers and is protected by international copyright laws.</ListItem>
                <ListItem>You may not reproduce, modify, distribute, display, perform, or create derivative works of any content from the LÉLLALL platform without our express written consent.</ListItem>
            </List>

            <SubHeading>Privacy:</SubHeading>
            <Paragraph>Your privacy is important to us. Please review our Privacy Policy carefully to understand how we collect, use, and safeguard your personal information.</Paragraph>

            <SubHeading>Liability:</SubHeading>
            <List>
                <ListItem>LÉLLALL shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the LÉLLALL platform.</ListItem>
                <ListItem>In no event shall LÉLLALL's aggregate liability for all claims relating to the LÉLLALL platform exceed the greater of one hundred dollars ($100) or the amount you paid LÉLLALL, if any, in the past six months for the services giving rise to the liability.</ListItem>
            </List>

            <SubHeading>Changes to Terms and Conditions:</SubHeading>
            <Paragraph>LÉLLALL reserves the right to revise these terms and conditions at any time without notice. By using the LÉLLALL platform, you agree to be bound by the current version of these terms and conditions.</Paragraph>

            <SubHeading>Contact Information:</SubHeading>
            <Paragraph>If you have any questions or concerns about these terms and conditions, please contact us at <Link href="mailto:support@lellall.com">support@lellall.com</Link></Paragraph>

            <Paragraph>By using the LÉLLALL platform, you acknowledge that you have read, understood, and agreed to be bound by these terms and conditions.</Paragraph>
            <div style={{ textAlign: 'center' }}>
                {copyright}
            </div>
        </Container>
    );
}

export default PrivacyPolicy;
