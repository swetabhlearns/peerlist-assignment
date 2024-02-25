export interface Employee {
  id: number;
  name: string;
  company: string;
  experience: string;
  holding: string;
  notice: string;
  contact: string;
  number: string;
  external?: boolean;
  image?: string;
  reffered?: boolean;
  peerMatched?: boolean;
}

export interface CardType {
  id: number;
  title: string;
  components: Employee[];
}
export const cardsData: CardType[] = [
  {
    id: 0,
    title: "Rejected",

    components: [
      {
        id: 1,
        name: "Ronald Richards",
        company: "Product Designer at Nothing",
        experience: "11y 6m",
        holding: "Yes",
        notice: "Immediate",
        contact: "abc@email.com",
        number: "+91 900640842",
        external: true,
      },
      {
        id: 2,
        name: "Esther Howard",
        company: "SDE-3 at HP",
        experience: "11y 6m",
        holding: "Yes",
        notice: "Immediate",
        contact: "darrell.stewards@emaildomain.com",
        number: "+91 945408861",
        image: "/1.png",
        peerMatched: true,
      },
    ],
  },
  {
    id: 1,
    title: "Applied",
    components: [
      {
        id: 3,
        name: "Esther Howard",
        company: "Backend Dev at Rapid API",
        experience: "11y 6m",
        holding: "Yes",
        notice: "Immediate",
        contact: "eshter@email.com",
        number: "+91 8450674066",
        image: "/2.png",
        reffered: true,
      },
      {
        id: 4,
        name: "Leslie Alexander",
        company: "Cloud Consultant at Rapid Circle",
        experience: "11y 6m",
        holding: "Yes",
        notice: "Immediate",
        contact: "lesalex@gmail.com",
        number: "+1 650077892",
        image: "/3.png",
      },
    ],
  },
  {
    id: 2,
    title: "Shorlisted",
    components: [
      {
        id: 5,
        name: "Guy Hawkins",
        company: "AI Consultant at Apple",
        experience: "11y 6m",
        holding: "Yes",
        notice: "Immediate",
        contact: "guy@apple.com",
        number: "+1 12345 67490",
        image: "/4.png",
      },
      {
        id: 7,
        name: "Arlene McCoy",
        company: "Cloud Consultant at Proton Mail",
        experience: "11y 6m",
        holding: "Yes",
        notice: "Immediate",
        contact: "arlene@protonmail.com",
        number: "+1 8790656844",
        external: true,
      },
    ],
  },
];
