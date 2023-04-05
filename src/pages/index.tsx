import { Heading } from '@chakra-ui/react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return <Heading>hello world</Heading>;
}
