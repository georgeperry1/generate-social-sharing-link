import { Command } from '@oclif/command'

const inquirer = require('inquirer');

const prompt = {
  getOptions: () =>
    inquirer.prompt([
      {
        type: "list",
        name: "platform",
        message: "Social Media Platform:",
        choices: ["Facebook", "Twitter", "LinkedIn"],
        default: 0,
      },
      {
        type: "input",
        name: "url",
        message: "URL you want to share:"
      },
      {
        type: "input",
        name: "supporting",
        message: "Supporting Text (Optional):"
      }
    ]),
};

const FACEBOOK_BASE = `https://www.facebook.com/v5.0/dialog/share?app_id=${process.env.FACEBOOK_APP_ID}&href=`;
const TWITTER_BASE = 'https://twitter.com/intent/tweet?text=';
const LINKEDIN_BASE = 'https://www.linkedin.com/sharing/share-offsite/?url=';

export default class GenerateLink extends Command {
  static description = 'Generate a URL to share on social media'
  
  static examples = [
    `$ generate-social-sharing-link generate-link`,
  ]

  generateFacebookLink (url: string) {
    const encodedPayload = encodeURIComponent(url);
    return `${FACEBOOK_BASE}${encodedPayload}&display=page`;
  }

  generateTwitterLink (url: string, supporting: string) {
    const encodedPayload = !supporting.length ? encodeURIComponent(url) : encodeURIComponent(`${supporting} ${url}`);
    return `${TWITTER_BASE}${encodedPayload}`;
  }

  generateLinkedInLink (url: string) {
    const encodedPayload = encodeURIComponent(url);
    return `${LINKEDIN_BASE}${encodedPayload}`;
  }

  generateLink(options: any) {
    const { platform, url, supporting } = options;

    switch (platform) {
      case 'Twitter':
        return this.generateTwitterLink(url, supporting);
      
      case 'LinkedIn':
        return this.generateLinkedInLink(url);
  
      case 'Facebook':
      default:
        return this.generateFacebookLink(url);
    }
  }

  async run() {
    this.log('Generate a new link');
    this.log('Only Twitter supports additional text');

    try {
      const options = await prompt.getOptions();

      const generatedLink = this.generateLink(options);

      return this.log(`Sharing link for ${options.platform}: ${generatedLink}`);
    } catch (err) {
      this.error(err.message);
    }
  }
}
