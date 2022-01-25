import formData from 'form-data';
import Mailgun from 'mailgun.js';
import emails from '../../lib/emails';

const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: 'api',
  key: process.env.MAILGUN_API_KEY,
  public_key: process.env.MAILGUN_PUBLIC_KEY,
});

export default async (req, res) => {
  try {
    const { emailAddress, locale, habit } = req.body;
    
    /* Validate email address */
    const validationRes = await mg.validate.get(emailAddress);

    if (validationRes.result === 'undeliverable') {
      throw 'Invalid email address';
    }

    /* Add email to appropriate list */
    let listAddress = 'english@14habits.com';
    let emailTemplate = emails.en[habit];

    if (locale === 'pt-BR') {
      listAddress = 'portuguese@14habits.com';
      emailTemplate = emails.pt[habit];
    } else if (locale === 'es-ES') {
      listAddress = 'spanish@14habits.com';
      emailTemplate = emails.es[habit];
    }

    const listRes = await mg.lists.members.createMember(listAddress, {
      address: emailAddress,
      subscribed: 'yes',
      upsert: 'yes',
    })

    if (!listRes.subscribed) {
      throw 'Unable to subscribe email address';
    }

    /* Send email */
    const sentRes = await mg.messages.create('14habits.com', {
      from: "Zeno from 14 Habits <zeno@14habits.com>",
      subject: emailTemplate.subject,
      html: emailTemplate.body,
      to: [emailAddress],
    });

    res.status(200).json({ sentRes });
  }
  catch(error) {
    res.status(400).json({ error });
  }
};