import React from 'react';
import { ChakraProvider, Box, Flex, Grid, Heading, Text, Modal, ModalOverlay, ModalContent, useDisclosure } from '@chakra-ui/react';
import { Global, css } from '@emotion/react';
import { motion } from 'framer-motion';
import NextImage from 'next/image';

const MotionBox = motion(Box);

// Data for games
const games = [
  {
    title: 'Тетрис',
    year: '1984',
    author: 'Алексей Пажитнов',
    thumbnail: '/images/tetris-thumb.png',
    mainImage: '/images/tetris-main.jpg',
    gridDiagram: '/images/tetris-diagram.png',
    description: {
      preview: 'Увлекательная головоломка, завоевавшая мир своей простотой.',
      topRight: 'Созданная в СССР, эта игра покорила весь мир своей простотой и увлекательностью.',
      bottomLeft: 'Название происходит от греческого «тетра» и «теннис».',
      bottomFull: 'Игра вдохновила поколение программистов и любителей головоломок.'
    }
  },
  {
    title: 'Ну, погоди!',
    year: '1984',
    author: 'Команда «Электроника»',
    thumbnail: '/images/nu-pogodi-thumb.png',
    mainImage: '/images/nu-pogodi-main.jpg',
    gridDiagram: '/images/nu-pogodi-diagram.png',
    description: {
      preview: 'Аркадная игра по мотивам мультфильма с Волком и Зайцем.',
      topRight: 'Аркадная игра по мотивам мультфильма с Волком и Зайцем.',
      bottomLeft: 'Игрок управляет Волком, ловящим яйца Зайцем.',
      bottomFull: 'Символ эпохи, вызывающий ностальгию у многих.'
    }
  },
  {
    title: 'Лапта',
    year: '1957',
    author: 'Народная игра',
    thumbnail: '/images/lapta-thumb.png',
    mainImage: '/images/lapta-main.jpg',
    gridDiagram: '/images/lapta-diagram.png',
    description: {
      preview: 'Древнерусская игра, предшественник бейсбола и крикета.',
      topRight: 'Древнерусская игра, предшественник бейсбола и крикета.',
      bottomLeft: 'Популярная в пионерлагерях и школьных лагерях.',
      bottomFull: 'Возрождается как национальный вид спорта.'
    }
  }
];

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedGame, setSelectedGame] = React.useState(null);

  const openGame = (game) => {
    setSelectedGame(game);
    onOpen();
  };

  return (
    <ChakraProvider>
      <Global
        styles={css`
          body {
            margin: 0;
            padding: 0;
            background-color: #5D223D;
            background-image: url('/images/pattern.png');
            background-repeat: repeat;
            background-position: center;
            background-size: 80px 80px;
            font-family: 'Inter', sans-serif;
            color: #fff;
          }
        `}
      />

      <Box p={6} maxW="1200px" mx="auto">
        {/* Header with slightly darker background */}
        <Flex
          bg="#4A1B31"
          p={4}
          rounded="md"
          justify="space-between"
          align="center"
          mb={12}
        >
          {[
            { src: '/images/arcade-machine.png', alt: 'Игровой автомат' },
            { src: '/images/logo.png', alt: 'Лого сайта' },
            { src: '/images/jump-rope.png', alt: 'Скакалка' },
          ].map((item) => (
            <MotionBox key={item.alt} whileHover={{ scale: 1.05 }} cursor="pointer">
              <Box position="relative" width="120px" height="120px">
                <NextImage
                  src={item.src}
                  alt={item.alt}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </Box>
            </MotionBox>
          ))}
        </Flex>

        {/* Preview cards in alternating layout like blog rows */}
        <Box bg="#4A1B31" p={6} rounded="md" mb={12}
>
          <Flex direction="column" gap={8}>
            {games.map((game, index) => (
              <Flex
                key={game.title}
                direction={index % 2 === 0 ? 'row' : 'row-reverse'}
                align="center"
                gap={6}
              >
                {/* Card button with image */}
                <MotionBox
                  as="button"
                  onClick={() => openGame(game)}
                  bg="whiteAlpha.800"
                  p={4}
                  rounded="md"
                  shadow="md"
                  cursor="pointer"
                  whileHover={{ scale: 1.03 }}
                  flex="1"
                  maxW="300px"
                >
                  <Box position="relative" width="100%" height="180px">
                    <NextImage
                      src={game.thumbnail}
                      alt={game.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-md"
                    />
                  </Box>
                </MotionBox>

                {/* Text preview block */}
                <Box flex="2" bg="whiteAlpha.800" p={4} rounded="md" shadow="md">
                  <Text fontSize="lg" mb={2}>
                    {game.description.preview}
                  </Text>
                  <Text fontSize="xs" color="gray.400">
                    Год: {game.year} | Автор: {game.author}
                  </Text>
                </Box>
              </Flex>
            ))}
          </Flex>
        </Box>

        {/* Detailed modal layout */}
        {selectedGame && (
          <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl">
            <ModalOverlay bg="blackAlpha.600" backdropFilter="blur(8px)" />
            <ModalContent bg="#a02a5a" p={6} rounded="md">
              <Heading as="h2" size="xl" mb={6} textAlign="center">
                {selectedGame.title}
              </Heading>
              <Grid templateColumns="2fr 1fr" templateRows="auto auto" gap={4} mb={4}>
                <Box rounded="md" overflow="hidden">
                  <Box position="relative" width="100%" height="200px">
                    <NextImage
                      src={selectedGame.mainImage}
                      alt={selectedGame.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </Box>
                </Box>
                <Box bg="#551a42" rounded="md" p={4}>
                  <Text color="#fff">{selectedGame.description.topRight}</Text>
                </Box>
                <Box bg="#551a42" rounded="md" p={4}>
                  <Text color="#fff">{selectedGame.description.bottomLeft}</Text>
                </Box>
                <Box rounded="md" overflow="hidden">
                  <Box position="relative" width="100%" height="200px">
                    <NextImage
                      src={selectedGame.gridDiagram}
                      alt="Диаграмма"
                      layout="fill"
                      objectFit="cover"
                    />
                  </Box>
                </Box>
              </Grid>

              <Box bg="#551a42" rounded="md" p={4}>
                <Text color="#fff">{selectedGame.description.bottomFull}</Text>
              </Box>
            </ModalContent>
          </Modal>
        )}
      </Box>
    </ChakraProvider>
  );
}
