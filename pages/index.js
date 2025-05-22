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
  AccordionIcon,
  Show
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
            topRight: "Тетрис — логическая аркада о том, как собирать падающие фигуры в ровные линии, чтобы они исчезали. Простая механика сделала игру мировой легендой.",
            bottomLeft: "Игрок поворачивает и перемещает тетромино — фигуры из четырёх квадратов, чтобы полностью заполнить горизонтальный ряд. Когда ряд завершён, он исчезает, и игрок получает очки. Задача — не дать фигурам достичь верха экрана, иначе игра закончится. Чем дольше игрок держится, тем быстрее падают фигуры.",
            bottomFull: "Тетрис стал символом эпохи, вдохновил программистов и породил множество клонов. Сегодня он признан одной из самых влиятельных игр в истории."
        },
        details: `
Автор игры — Алексей Пажитнов, советский программист, создавший Тетрис в 1984 году в Москве. Первая версия была написана на Pascal для «Электроники-60». Тетрис родился из увлечения Алексея Пажитнова головоломкой «Пентамино», где нужно было складывать фигурки из пяти квадратов. Он упростил
идею до тетромино — фигурок из четырёх квадратов, и разработал алгоритм их падения. Название — это сочетание греческого «тетра» (четыре) и любимого спорта Пажитнова — тенниса. В 1986 году появилась первая западная версия, а в 1989-м Nintendo выпустила Game Boy с Тетрисом.

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
            topRight: "Игра, где игрок управляет Волком и ловит яйца, вышла на игровых автоматах в 1984 году, а позже — в карманных и компьютерных версиях.",
            bottomLeft: "Игрок управляет Волком, который стоит у четырёх курятников и ловит падающие яйца. Управление осуществляется четырьмя кнопками, по одной на каждое направление. За пропущенные яйца игрок теряет жизни, а за успешную ловлю получает очки. Цель — набрать как можно больше очков, не упустив слишком много яиц.",
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
        title: 'Вангеры',
        year: '1998',
        author: 'K-D Lab',
        thumbnail: '/images/vangers-thumb.jpg',
        mainImage: '/images/vanger_map.png',
        gridDiagram: '/images/vangers-gameplay.jpg',
        description: {
            preview: "«Вангеры» — культовая российская игра с уникальным стилем, сочетающая гонки, RPG и научную фантастику.",
            topRight: "Выпущенная в 1998 году студией K-D Lab, игра предлагала игрокам исследовать странный постапокалиптический мир в роли Вангера — гонщика и курьера.",
            bottomLeft: "Игрок управляет автомобилем-машиной в изолированном мире, перемещаясь между городами, участвуя в сражениях, перевозке грузов и выполнении заданий. Мир игры — это нелинейная вселенная с собственной мифологией, биосистемой и физикой. Управление усложнялось инерцией и гравитацией, а каждое решение могло повлиять на дальнейшее развитие сюжета. Цель — добраться до центра мира и раскрыть загадки происхождения Вангеров.",
            bottomFull: "Игра удивила своим уникальным языком, дизайном и геймплейной смесью жанров. Несмотря на скромные продажи, «Вангеры» стали культовым проектом, получили ремастер в 2014 году и до сих пор изучаются фанатами."
        },
        details: `
«Вангеры» (Vangers: One for the Road) — игра российского разработчика K-D Lab, вышедшая в 1998 году. Она сочетает в себе элементы гонки, RPG, стратегии и симулятора выживания. Главный герой — Вангер — живёт в замкнутой вселенной, называемой Мирроу, и должен выполнять миссии, участвовать в боях и открывать новые зоны.

Графика была воксельной, с процедурной генерацией ландшафтов. Главная фишка — оригинальный сеттинг с собственным сленгом, философией и запутанным сюжетом. Игра предлагала десятки часов исследования и уникальный стиль подачи информации — через «разговоры» с городами и фракциями.

Несмотря на сложность входа, «Вангеры» стали культовыми, особенно в кругах российских геймеров и разработчиков. В 2014 году K-D Lab выпустила ремастер для Steam и GOG.

Интересные факты:
- Игра писалась на собственном движке Surmap.
- Озвучка и стиль текстов вдохновлены русским футуризмом.
- До сих пор считается одной из самых необычных игр из СНГ.
`
    },
    {
        title: 'Перестройка',
        year: '1990',
        author: 'Lokasoft',
        thumbnail: '/images/perestroika-thumb.jpg',
        mainImage: '/images/perestroika_menu.jpg',
        gridDiagram: '/images/perestroika_gameplay.jpg',
        description: {
            preview: "«Перестройка» — аркадная игра-аллегория, созданная в разгар одноимённого политического периода.",
            topRight: "Игра была выпущена в 1990 году студией Lokasoft и символизировала сложный путь гражданина сквозь реформы и нестабильность.",
            bottomLeft: "Игрок управляет лягушкой, прыгающей по исчезающим кувшинкам, символизирующим нестабильные платформы. Цель — добраться до синего кувшина, который означает светлое будущее или стабильность. По пути нужно избегать бюрократов и ловить бонусы. Каждое движение требует точного расчёта, ведь кувшинки тонут буквально на глазах.",
            bottomFull: "«Перестройка» — не просто игра, а сатира на общественно-политическую ситуацию СССР конца 1980-х. Её минимализм и символизм сделали её настоящим культурным артефактом эпохи."
        },
        details: `
«Перестройка» (англ. Perestroika) — аркадная компьютерная игра, созданная советской компанией Lokasoft в 1990 году. Главный герой — лягушка, символизирующая гражданина СССР, должен преодолеть хаос реформ, прыгая по исчезающим платформам.

Каждый уровень сложнее предыдущего — платформы тонут быстрее, препятствий становится больше. Некоторые кувшинки приносят бонусы, другие — уменьшают очки. Особую атмосферу игре придаёт ироничная озвучка и оформление.

Игра распространялась на дискетах и была популярна в начале 1990-х на компьютерах IBM PC. Её также использовали как образовательный пример в школах и техникумах — как по программированию, так и как аллегорию для обсуждения общества.

Интересные факты:
- Название игры напрямую отсылает к политике Михаила Горбачёва.
- Цвета кувшинок имели символическое значение (например, красные — бюрократы).
- «Перестройка» часто входит в списки самых запоминающихся советских игр.
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
            background-size: 700px 700px;
            font-family: 'Inter', sans-serif;
            color: #fff;
          }
        `}
      />

      {/* Декоративные тетромино */}
                  <Show above="md">
              {['/images/ttr1.png','/images/ttr2.png','/images/ttr3.png','/images/ttr4.png','/images/ttr5.png','/images/ttr6.png','/images/ttr7.png','/images/ttr8.png'].map((src, i) => (
                <Box
                  key={i}
                  position="absolute"
                  top={`${200 + i*120}px`} // смещение по вертикали
                  left={i % 2 === 0 ? 0 : 'auto'}
                  right={i % 2 !== 0 ? 0 : 'auto'}
                  width="192px"
                  height="192px"
                  zIndex={-1}
                  userSelect="none"
                >
                  <NextImage src={src} alt={`Тетромино ${i+1}`} layout="fill" objectFit="contain" />
                </Box>
              ))}
            </Show>

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
                rounded="32px"
                shadow="lg"
                cursor="pointer"
                whileHover={{ scale: 1.03 }}
                w={{ base: '100%', md: '600px' }}
                mx="auto"
              >
                <Box
                  position="relative"
                  width="100%"
                  height={{ base: '160px', md: '220px' }}
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
              <Box bg="black" borderWidth="5px" borderColor="green.600" p={{ base: 3, md: 4 }} rounded="xl" shadow="md" w="100%">
                <Text fontSize={{ base: 'md', md: 'lg' }} mb={2} color="white">
                  {game.description.preview}
                </Text>
                <Text fontSize="xs" color="green.400">
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

                {/* Улучшенный блок details */}
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
