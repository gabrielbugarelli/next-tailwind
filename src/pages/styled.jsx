import tw from 'tailwind-styled-components'

export const Container = tw.div`
  p-5
  flex
  flex-col
  items-center 
  h-screen
  bg-purple-500 
  text-gray-100 
`;

export const Title = tw.h1`
  font-bold
  text-2xl
  mb-5
`;

export const Card = tw.div`
  font-bold
  text-gray-600
  bg-gray-200
  rounded-xl
  p-5
  shadow-lg
  w-2/6
`;