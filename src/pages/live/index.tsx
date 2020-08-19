import { useEffect, useState } from 'react';
import Layout from 'src/components/layout';
import { motion } from 'framer-motion';
import socketIOClient from 'socket.io-client';
import { GetStaticProps } from 'next';

let socket;

export default function SocketPage({ socketIOEndpoint }) {
  const [userName, setUserName] = useState('');
  const [response, setResponse] = useState('');

  console.log(`socketIOEndpoint=${socketIOEndpoint}`);

  useEffect(() => {
    socket = socketIOClient(socketIOEndpoint);
    socket.on('FromAPI', (data) => {
      setResponse(data);
    });

    socket.on('joinAccept', (data) => {
      console.log('join accepted');

      console.log(data);
    });
  }, []);

  const joinLiveSession = () => {
    socket.emit('joinRequest', {
      userName,
      sessionName: 'AD5',
    });
  };

  return (
    <Layout>
      <motion.div
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            joinLiveSession();
          }}
        >
          <input
            type="text"
            value={userName}
            onChange={(e) => {
              e.preventDefault();
              setUserName(e.target.value);
            }}
          />

          <input type="submit" value="Join" />
        </form>
        It's <time dateTime={response}>{response}</time>
      </motion.div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      socketIOEndpoint:
        process.env.NODE_ENV === 'development'
          ? 'http://localhost:5000'
          : 'https://accy570-live-server.herokuapp.com/',
    },
  };
};
