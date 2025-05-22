import React from 'react';
import {
  ChakraProvider,
  Box,
  Flex,
  Grid,
  Heading,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon
} from '@chakra-ui/react';
import { Global, css } from '@emotion/react';
import { motion } from 'framer-motion';
import NextImage from 'next/image';

const MotionBox = motion(Box);

// Данные об играх с подробным описанием
const games = [
    {
        title: 'Тетрис',
        year: '1984',
        author: 'Алексей Пажитнов',
        thumbnail: '/images/tetris-face.jpg',
        mainImage: '/images/tetris-first-version.jpg',
        gridDiagram: '/images/tetris-ibm-version.png',
        description: {
            preview: "Тетрис — культовая советская головоломка, покорившая миллионы игроков по всему миру.",
            topRight: "Автор игры — Алексей Пажитнов, советский программист, создавший Тетрис в 1984 году в Москве. Первая версия была написана на Pascal для «Электроники-60».",
            bottomLeft: "Название — это сочетание греческого «тетра» (четыре) и любимого спорта Пажитнова — тенниса. В 1986 году появилась первая западная версия, а в 1989-м Nintendo выпустила Game Boy с Тетрисом.",
            bottomFull: "Тетрис стал символом эпохи, вдохновил программистов и породил множество клонов. Сегодня он признан одной из самых влиятельных игр в истории."
        },
        details: `
Тетрис родился из увлечения Алексея Пажитнова головоломкой «Пентамино», где нужно было складывать фигурки из пяти квадратов. Он упростил идею до тетромино — фигурок из четырёх квадратов, и разработал алгоритм их падения.

Графика первой версии была крайне примитивной: фигурки обозначались скобками и буквами (например, [ ]). Изначально Тетрис не был коммерческим продуктом — он распространялся бесплатно среди сотрудников институтов, но вскоре попал за границу через Венгрию, где его адаптировали для IBM PC.

В 1988 году права на игру приобрели Mirrorsoft (Великобритания) и Spectrum HoloByte (США). В 1989 году Nintendo выпустила Game Boy с Тетрисом, что сделало игру мировой сенсацией.

Из-за сложностей с авторскими правами разгорелся международный скандал: Nintendo и Atari судились за права, но победу одержал СССР, и Nintendo получила лицензию. Алексей Пажитнов долго не получал прибыли, но в 1996 году основал The Tetris Company и начал получать роялти.

Интересные факты:
- В 2007 году Тетрис был занесён в Зал славы видеоигр.
- В 2014 году игре исполнилось 30 лет, и по всему миру прошли тематические мероприятия.
`
    },
    {
        title: 'Ну, погоди!',
        year: '1984',
        author: 'Команда «Электроника»',
        thumbnail: '/images/nu-pogodi-thumb.png',
        mainImage: '/images/packaging-of-game.jpg',
        gridDiagram: '/images/nu-pogodi-back-side.jpg',
        description: {
            preview: "«Ну, погоди!» — аркада по мотивам любимого мультфильма, ставшая символом советского детства.",
            topRight: "В 1984 году на заводе «Электроника» появился первый игровой автомат, а позже — портативные и компьютерные версии. Игрок управляет Волком, ловящим яйца.",
            bottomLeft: "Автоматная версия создана инженером Михаилом Алексеевым. Карманные игры продавались в магазинах, а пиратские версии для ZX Spectrum и других компьютеров распространялись на дискетах и кассетах.",
            bottomFull: "«Ну, погоди!» — не просто игра, а часть поп-культуры. Оригинальные автоматы и «Электроника ИМ-02» стали коллекционными раритетами, а современные ремейки продолжают радовать новое поколение."
        },
        details: `
Игра основана на мультфильме «Ну, погоди!», где Волк гонится за Зайцем. Цель — ловить яйца, избегая других предметов (например, кирпичей). В автоматах использовался жидкокристаллический экран, а управление осуществлялось кнопками.

Портативная версия «Электроника ИМ-02» (1986) имела чёрно-белый экран и динамик. Она стала одной из первых массовых электронных игр в СССР. В конце 1980-х и 1990-х появились компьютерные клоны с улучшенной графикой для ZX Spectrum, БК-0010, ДВК.

Игровые автоматы стояли в парках, пионерлагерях, домах культуры. Карманные игры стоили около 25 рублей — недельная зарплата инженера. В автоматы бросали 15-копеечные монеты, а портативные устройства дети брали с собой в школу.

Интересный факт: из-за простоты игры в неё могли играть даже те, кто никогда не держал джойстик в руках.

Культурное влияние:
- Символ детства для поколения 1980–1990-х.
- Оригинальные автоматы и «Электроника ИМ-02» сейчас продаются как коллекционные раритеты.
- Современные ремейки и мобильные версии поддерживают интерес к игре и сегодня.
`
    },
    {
        title: 'Лапта',
        year: '1957',
        author: 'Народная игра',
        thumbnail: '/images/lapta-thumb.png',
        mainImage: '/images/lapta-old.jpg',
        gridDiagram: '/images/lapta-1938.jpg',
        description: {
            preview: "Лапта — древнерусская командная игра, сочетающая спорт, стратегию и азарт. Предшественник бейсбола и крикета.",
            topRight: "Первые упоминания о лапте встречаются в летописях XIV века. В неё играли ещё во времена Ивана Грозного, а название происходит от слова «лапа» (бита).",
            bottomLeft: "Правила просты: нужно отбить мяч битой и перебежать поле, пока соперники пытаются поймать мяч или осалить бегущего. В 1957 году лапта стала официальной спортивной дисциплиной.",
            bottomFull: "Сегодня лапта возрождается как национальный вид спорта: проходят турниры в России и за рубежом, а игра упоминается даже у Льва Толстого и Владимира Даля."
        },
        details: `
Лапта использовалась как тренировка для стрельцов и развивала скорость и меткость. Аналоги игры есть у многих народов: финская песапалло, польская палка-гонка.

Инвентарь: бита (деревянная, длиной 60–110 см), мяч (теннисный или специальный), поле (30–40 м в длину, 15–20 м в ширину), команды по 5–10 игроков.

Ход игры:
1. Бьющий игрок отбивает мяч как можно дальше.
2. Перебегает в «зону противника» и возвращается обратно.
3. Если мяч пойман с лёта или бьющий осален — он выбывает.

В 1920-х годах лапта вошла в программу физкультурной подготовки, а в СССР проводились городские и всесоюзные соревнования. Минимальный инвентарь и командный дух сделали лапту любимой игрой в школах, дворах и пионерлагерях.

С 2003 года действует Федерация русской лапты России, а в 2022 году лапта включена в программу Всероссийских сельских игр.

Интересные факты:
- Самый дальний зафиксированный удар — 120 метров.
- В XIX веке лапту использовали для тренировки солдат.
`
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
          html, body {
            margin: 0;
            padding: 0;
          }
          body {
            background-color: #4A1B31;
            background-image: url('/images/pattern.png');
            background-repeat: repeat;
            background-position: center;
            background-size: 80px 80px;
            font-family: 'Inter', sans-serif;
            color: #fff;
          }
        `}
      />

      {/* Header background stripe full width */}
<Box position="absolute" top={0} left={0} right={0}>
        <Box bg="#9d1f4e" w="100%" py={{ base: 8, md: 24 }} />

  {/* Header image overlapping stripe */}
  <Flex
    justify="center"
    position="relative"
    zIndex={1}
    mt={{ base: -16, md: -40 }}
    mb={12}
  >
    <Box position="relative" width={{ base: '90%', md: '60%' }} height={{ base: '120px', md: '180px' }}>
      <NextImage
        src="/images/header-title.png"
        alt="Заголовок сайта"
        layout="fill"
        objectFit="contain"
      />
    </Box>
  </Flex>
</Box>

<Box 
  mt={{ base: '116px', md: '200px' }}
  px={{ base: 4, md: 6 }}
  pb={{ base: 6, md: 6 }}
  maxW="1200px"
  mx="auto"
>


        {/* Preview cards */}
  <Flex direction="column" gap={{ base: 6, md: 8 }} mb={12}>
          {games.map((game, index) => (
            <Flex
              key={game.title}
              direction={{ base: 'column', md: index % 2 === 0 ? 'row' : 'row-reverse' }}
              align="center"
              gap={{ base: 4, md: 6 }}
            >
              {/* Card button with image */}
              <MotionBox
                as="button"
                outline="none"
                _focus={{ boxShadow: 'none' }}
                onClick={() => openGame(game)}
                bg="#f7f3fa"
                // p={{ base: 2, md: 4 }}
                rounded="32px"
                shadow="lg"
                cursor="pointer"
                whileHover={{ scale: 1.03 }}
                w={{ base: '100%', md: '320px' }}
                mx="auto"
              >
                <Box
                  position="relative"
                  width="100%"
                  height={{ base: '160px', md: '180px' }}
                  minH="160px"
                  bg="gray.200"
                  rounded="32px"
                  overflow="hidden"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <NextImage
                    src={game.thumbnail}
                    alt={game.title}
                    layout="fill"
                    objectFit="cover"
                    style={{ borderRadius: '0.5rem' }}
                  />
                </Box>
              </MotionBox>

              {/* Text preview block */}
              <Box bg="#fff" p={{ base: 3, md: 4 }} rounded="xl" shadow="md" w="100%">
                <Text fontSize={{ base: 'md', md: 'lg' }} mb={2} color="#2d133b">
                  {game.description.preview}
                </Text>
                <Text fontSize="xs" color="gray.500">
                  Год: {game.year} | Автор: {game.author}
                </Text>
              </Box>
            </Flex>
          ))}
        </Flex>

{/* Modal with details */}
         {selectedGame && (
          <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl">
            <ModalOverlay bg="blackAlpha.600" backdropFilter="blur(8px)" />
            <ModalContent bg="linear-gradient(135deg, #6d2a4b 0%, #a02a5a 100%)" p={6} rounded="2xl" maxW="800px" maxH="90vh">
              <Heading as="h2" size="xl" mb={6} textAlign="center" color="#fff" textShadow="0 2px 16px #0008">
                {selectedGame.title}
              </Heading>
              <Box overflowY="auto" maxH="70vh">
                <Grid templateColumns={{ base: '1fr', md: '2fr 1fr' }} templateRows={{ base: 'auto auto auto', md: 'auto auto' }} gap={4} mb={4}>
                                    <Box rounded="lg" overflow="hidden" bg="gray.100" minH="200px">
                                        <Box position="relative" width="100%" height="200px">
                                            <NextImage
                                                src={selectedGame.mainImage}
                                                alt={selectedGame.title}
                                                layout="fill"
                                                objectFit="cover"
                                                style={{ borderRadius: '0.5rem' }}
                                            />
                                        </Box>
                                    </Box>
                                    <Box bg="#a02a5a" rounded="lg" p={4}>
                                        <Text color="#fff">{selectedGame.description.topRight}</Text>
                                    </Box>
                                    <Box bg="#a02a5a" rounded="lg" p={4}>
                                        <Text color="#fff">{selectedGame.description.bottomLeft}</Text>
                                    </Box>
                                    <Box rounded="lg" overflow="hidden" bg="gray.100" minH="200px">
                                        <Box position="relative" width="100%" height="200px">
                                            <NextImage
                                                src={selectedGame.gridDiagram}
                                                alt="Диаграмма"
                                                layout="fill"
                                                objectFit="cover"
                                                style={{ borderRadius: '0.5rem' }}
                                            />
                                        </Box>
                                    </Box>
                                </Grid>

                <Box bg="#6d2a4b" rounded="lg" p={4} mb={4}>
                  <Text color="#fff">{selectedGame.description.bottomFull}</Text>
                </Box>

                {/* Улучшенный блок details с Accordion */}
                {selectedGame.details && (
                  <Accordion allowToggle bg="#3a1027" rounded="lg" p={4}>
                    <AccordionItem border="none">
                      <AccordionButton _expanded={{ bg: '#2d0d1a', color: '#fff' }}>
                        <Box flex="1" textAlign="left" fontWeight="bold" color="#fff">
                          Дополнительная информация
                        </Box>
                        <AccordionIcon color="#fff" />
                      </AccordionButton>
                      <AccordionPanel pb={4} color="#fff" fontSize="md" sx={{ 'h2, h3': { fontWeight: 'bold', mt: 4, mb: 2 }, 'ul': { ml: 6, mb: 4 } }}>
                        <Text whiteSpace="pre-line">
                          {selectedGame.details}
                        </Text>
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                )}
              </Box>
            </ModalContent>
          </Modal>
        )}
      </Box>
    </ChakraProvider>
  );
}
