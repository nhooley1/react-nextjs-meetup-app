import MeetupDetail from '../../components/meetups/MeetupDetail';

const MeetupDetailPage = (props) => {
  return <MeetupDetail text={props.displayText} />;
};

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupid: 'm1',
        },
      },
      {
        params: {
          meetupid: 'm2',
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  // fetch data

  const meetupId = context.params.meetupid;

  console.log(meetupId);

  return {
    props: {
      displayText: `This is the details page display text for ${meetupId}`,
    },
  };
}

export default MeetupDetailPage;
