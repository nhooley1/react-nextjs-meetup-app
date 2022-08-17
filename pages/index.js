import { useEffect, useState } from 'react';
import MeetupList from '../components/meetups/MeetupList';
import { MongoClient } from 'mongodb';
import { DB_CREDENTIALS } from '../db-credentials/db-credentials';

// doesnt include server side imports in front end bundle, next.js detects this.

// const DUMMY_MEETUPS = [
//   {
//     id: 'm1',
//     title: '1st meetup',
//     image:
//       'https://www.tripsavvy.com/thmb/6qw_gIgao_S0HDGTpQJkNAN8UN0=/900x0/filters:no_upscale():max_bytes(150000):strip_icc():gifv():format(webp)/GettyImages-4540860191-59930af8396e5a0010a21cde.jpg',
//     address: 'Snowdonia',
//     description: 'Welsh hills',
//   },
//   {
//     id: 'm2',
//     title: '2nd meetup',
//     image:
//       'https://www.coppermines.co.uk/wp-content/uploads/2021/04/Lake-District-Cottages-Fantastic-Facts-About-the-Lake-District-Blog-Image.jpg',
//     address: 'Lake District',
//     description: 'English hills',
//   },
// ];

function HomePage(props) {
  return <MeetupList meetups={props.meetups}></MeetupList>;
}

// doesnt execute on the client, unlike useEffect.
// fixes the html in devtools not been shown due to useEffect working on second re-render cycle.
// data fetching for pre rendering.
// ONLY WORKING - for pages files, not in components.
// is a pre-rendering process - calls BEFORE calling component function.
// executed during build process.
// SEO improvements.
// fetch data from an API etc.
// need to return an object.
// return a props object, has to be called props/
// revalidate: 10 etc
// updated after deployment
// responsible for regeneration, on the server, post deployment
// value is in seconds

export async function getStaticProps() {
  const client = await MongoClient.connect(
    `mongodb+srv://${DB_CREDENTIALS.username}:${DB_CREDENTIALS.password}@cluster0.gcbnc5v.mongodb.net/meetups?retryWrites=true&w=majority`
  );

  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 10,
  };
}

// Rus on server, like getStaticProps, but runs on client, after deployment.
// this is preferable to getStaticProps when you have mulitple updates per second, otherwise getStaticProps is better.
// get access to req / res, unlike getStaticProps

// export async function getServerSideProps(context) {
//   context.req = context.req;
//   const res = context.res;
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export default HomePage;
