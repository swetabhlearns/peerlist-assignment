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
        company: "Cloud Consultant at Rapid Circle",
        experience: "11y 6m",
        holding: "Yes",
        notice: "Immediate",
        contact: "darrell.stewards@emaildomain.com",
        number: "+1 12345 67490",
        external: true,
      },
      {
        id: 2,
        name: "Esther Howard",
        company: "Cloud Consultant at Rapid Circle",
        experience: "11y 6m",
        holding: "Yes",
        notice: "Immediate",
        contact: "darrell.stewards@emaildomain.com",
        number: "+1 12345 67490",
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
        company: "Cloud Consultant at Rapid Circle",
        experience: "11y 6m",
        holding: "Yes",
        notice: "Immediate",
        contact: "darrell.stewards@emaildomain.com",
        number: "+1 12345 67490",
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
        contact: "darrell.stewards@emaildomain.com",
        number: "+1 12345 67490",
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
        company: "Cloud Consultant at Rapid Circle",
        experience: "11y 6m",
        holding: "Yes",
        notice: "Immediate",
        contact: "darrell.stewards@emaildomain.com",
        number: "+1 12345 67490",
        image: "/4.png",
      },
      {
        id: 7,
        name: "Arlene McCoy",
        company: "Cloud Consultant at Rapid Circle",
        experience: "11y 6m",
        holding: "Yes",
        notice: "Immediate",
        contact: "darrell.stewards@emaildomain.com",
        number: "+1 12345 67490",
        external: true,
      },
    ],
  },
];
