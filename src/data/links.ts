import Whatsapp from '../assets/logo/whatsapp.png'

export interface LinkItem {
  id: string;
  title: string;
  url: string;
  image?: string;
}

export interface LinkSection {
  title: string;
  links: LinkItem[];
}

export const portalData = {
  profile: {
    name: "@mudengsttnf",
    description: "Wadah Buat Kamu yang Passionate di Bidang Multimedia Digital Engagement",
    logo: "https://cdn.mudeng.oktaa.my.id/logo/main-logo-mudeng.png",
    socials: {
      email: "mailto:mudeng@nurulfikri.ac.id",
      instagram: "https://instagram.com/mudengsttnf",
      tiktok: "https://tiktok.com/@mudengsttnf",
    }
  },
  sections: [
    {
      title: "MUDENG 2026",
      links: [
        {
          id: "m26-1",
          title: "Form Pendaftaran UI/UX Gemastik 2026",
          url: "https://forms.gle/3hBNrVTYkbcuCAg86",
          image: "https://ugc.production.linktr.ee/ff5388f8-3ff7-4612-b52c-2b9ce7fe6c18_download--4-.jpeg?io=true&size=thumbnail-stack_v1_0"
        },
        {
          id: "m26-2",
          title: "Daftar Motion Craft",
          url: "https://bit.ly/PendaftaranMotionCraft-2026",
          image: "https://ugc.production.linktr.ee/f1c9a668-0e6c-44a5-8284-550e0dae08ce_YOU-.jpeg?io=true&size=thumbnail-stack_v1_0"
        },
        {
          id: "m26-3",
          title: "Join Menjadi Mudeng2026",
          url: "https://chat.whatsapp.com/LOrUMOHuLMY3ftHmz6dovF?mode=gi_t",
          image: Whatsapp
        }
      ]
    },
    {
      title: "RateCard",
      links: [
        {
          id: "rc-1",
          title: "Kerjasama | Media Partner",
          url: "https://drive.google.com/file/d/1pW9ctakAwqCbqEgsRINSo16ZenppoW0x/view?usp=drive_link",
          image: "https://i.pinimg.com/736x/f5/6f/14/f56f14b0370937468075f623b5271331.jpg"
        },
        {
          id: "rc-2",
          title: "Dukung MUDENG | Saweria",
          url: "https://saweria.co/mudeng",
          image: "https://ugc.production.linktr.ee/0d338b41-ddde-45a5-b8b6-72efd5d32489_download--5-.jpeg?io=true&size=thumbnail-stack_v1_0"
        }
      ]
    },
    {
      title: "Logo",
      links: [
        {
          id: "lg-1",
          title: "Download LOGO MUDENG",
          url: "https://drive.google.com/file/d/15EZohHgCUKyy51BGpQFUi_4bL9z7KUvD/view",
          image: "https://cdn.mudeng.oktaa.my.id/logo/main-logo-mudeng.png"
        }
      ]
    }
  ]
};
