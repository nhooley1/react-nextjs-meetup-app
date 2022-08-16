import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: '1st meetup',
    image:
      'https://www.tripsavvy.com/thmb/6qw_gIgao_S0HDGTpQJkNAN8UN0=/900x0/filters:no_upscale():max_bytes(150000):strip_icc():gifv():format(webp)/GettyImages-4540860191-59930af8396e5a0010a21cde.jpg',
    address: 'Snowdonia',
    description: 'Welsh hills',
  },
  {
    id: 'm2',
    title: '2nd meetup',
    image:
      'https://www.coppermines.co.uk/wp-content/uploads/2021/04/Lake-District-Cottages-Fantastic-Facts-About-the-Lake-District-Blog-Image.jpg',
    address: 'Lake District',
    description: 'English hills',
  },
];

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS}></MeetupList>;
}

export default HomePage;
