import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

const WelcomeEmail = () => (
  <Html>
    <Head />
    <Preview>Welcome to Zack Hazlett Fitness</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={logoContainer}>
          {/* <Img src={`${baseUrl}/static/slack-logo.png`} width="120" height="36" alt="Slack" /> */}
        </Section>
        <Heading style={h1}>Welcome to Zack Hazlett Fitness</Heading>
        <Text style={heroText}>
          I am pumped to have you on this fitness journey with me. You&apos;ll
          be notified when new courses are released and what to expect. Enoy
          your first course 10% off with your one time code below. Time to get
          to work!
        </Text>

        <Section style={codeBox}>
          <Text style={confirmationCodeText}>put code here</Text>
        </Section>

        <Text style={text}>
          If you didn&apos;t request this email, there&apos;s nothing to worry
          about, you can safely ignore it.
        </Text>

        <Section>
          <Row style={footerLogos}>
            {/* <Column style={{ width: '66%' }}>
              <Img src={`${baseUrl}/static/slack-logo.png`} width="120" height="36" alt="Slack" />
            </Column> */}
            <Column>
              <Section>
                <Row>
                  <Column>
                    {/* <Link href="/">
                      <Img
                        src={`${baseUrl}/static/slack-twitter.png`}
                        width="32"
                        height="32"
                        alt="Slack"
                        style={socialMediaIcon}
                      />
                    </Link> */}
                  </Column>
                  <Column>
                    {/* <Link href="/">
                      <Img
                        src={`${baseUrl}/static/slack-facebook.png`}
                        width="32"
                        height="32"
                        alt="Slack"
                        style={socialMediaIcon}
                      />
                    </Link> */}
                  </Column>
                  <Column>
                    {/* <Link href="/">
                      <Img
                        src={`${baseUrl}/static/slack-linkedin.png`}
                        width="32"
                        height="32"
                        alt="Slack"
                        style={socialMediaIcon}
                      />
                    </Link> */}
                  </Column>
                </Row>
              </Section>
            </Column>
          </Row>
        </Section>

        <Section>
          <Link
            style={footerLink}
            href="https://slackhq.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Our blog
          </Link>
          &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <Link
            style={footerLink}
            href="https://slack.com/legal"
            target="_blank"
            rel="noopener noreferrer"
          >
            Policies
          </Link>
          &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <Link
            style={footerLink}
            href="https://slack.com/help"
            target="_blank"
            rel="noopener noreferrer"
          >
            Help center
          </Link>
          &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          <Link
            style={footerLink}
            href="https://slack.com/community"
            target="_blank"
            rel="noopener noreferrer"
            data-auth="NotApplicable"
            data-linkindex="6"
          >
            Slack Community
          </Link>
          <Text style={footerText}>
            ©2022 Slack Technologies, LLC, a Salesforce company. <br />
            500 Howard Street, San Francisco, CA 94105, USA <br />
            <br />
            All rights reserved.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default WelcomeEmail;

const footerText = {
  fontSize: "12px",
  color: "#b7b7b7",
  lineHeight: "15px",
  textAlign: "left" as const,
  marginBottom: "50px",
};

const footerLink = {
  color: "#b7b7b7",
  textDecoration: "underline",
};

const footerLogos = {
  marginBottom: "32px",
  paddingLeft: "8px",
  paddingRight: "8px",
  width: "100%",
};

const socialMediaIcon = {
  display: "inline",
  marginLeft: "32px",
};

const main = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
};

const container = {
  margin: "0 auto",
  padding: "0px 20px",
};

const logoContainer = {
  marginTop: "32px",
};

const h1 = {
  color: "#1d1c1d",
  fontSize: "36px",
  fontWeight: "700",
  margin: "30px 0",
  padding: "0",
  lineHeight: "42px",
};

const heroText = {
  fontSize: "20px",
  lineHeight: "28px",
  marginBottom: "30px",
};

const codeBox = {
  background: "rgb(245, 244, 245)",
  borderRadius: "4px",
  marginBottom: "30px",
  padding: "40px 10px",
};

const confirmationCodeText = {
  fontSize: "30px",
  textAlign: "center" as const,
  verticalAlign: "middle",
};

const text = {
  color: "#000",
  fontSize: "14px",
  lineHeight: "24px",
};
