import {getRandomInteger, getRandomArrayElement, createIdGenerator} from './util.js';


/* Указание количества элементов*/
const PICTURE_COUNT = 25;

const DESCRIPTIONS = [
  'Санаторий им. XIX съезда ВЦСПС',
  'Что-то про сук',
  'Море',
  'Корова на песке',
  'Рисовые человечки и их кишки',
  'Ну как на такой на рыбалку съездишь',
  'Десерт по цене Ламборгини',
  'Бормотуха',
  'Бичкрафт Барон',
  'Обувь',
  'Заборы',
  'Даже картошки не привезёшь',
  'Завтрак на рыбалке',
  'Пирожки с котятами',
  'Говноступы',
  'Вашингтонский рейс Сармата',
  'Хор ДК завода РТИ',
  'Запорожец',
  'Не бойся заблудиться в темноте',
  'Крупная морковь выросла',
  'Бедняцкий салат из курицы',
  'Трое тонут в море',
  'В суп',
  'Пожар в ДК Машиностроителей',
  'Гегепотам или гигипотам',
];

/* Диапазон количества лайков*/
const LIKE_MIN_COUNT = 15;
const LIKE_MAX_COUNT = 200;

/* Составные комментов*/
const COMMENT_COUNT = 20;
const COMMENT_LINES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

/* Количество аватарок*/
const AVATAR_COUNT = 6;

const NAMES = [
  'Игорь',
  'Степан',
  'Алексей',
  'Полина',
  'Дмитрий',
  'Светлана',
  'Максим',
  'Надежда',
  'Олеся',
  'Олег',
  'Георгий',
  'Елена',
  'Галина',
  'Роман',
  'Андрей',
];

/* Замыкание*/
const generateCommentId = createIdGenerator();

/* Функция для создания коммента с использованием id коммента, авы и массива комментов*/
const createMessage = () =>
  Array.from({length: getRandomInteger(1, 2)}, () =>
    getRandomArrayElement(COMMENT_LINES)
  ).join(' '); // Соединяет несколько комментов.

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, AVATAR_COUNT)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAMES),
});

/* Функция для создания изображения с участием id, url и description*/
const createPicture = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomArrayElement(LIKE_MIN_COUNT, LIKE_MAX_COUNT),
  comments: Array.from(
    {length: getRandomInteger(0, COMMENT_COUNT)},
    createComment
  ),
});

/* Функция, которая будет вызвана для каждого элемента массива. Она и создаёт эти 25 объектов*/
const getPictures = () =>
  Array.from({length: PICTURE_COUNT}, (_, pictureIndex) => // Знак _ показывает, что этот параметр не нужен, а нужен индекс.
    createPicture(pictureIndex + 1)
  );

export {getPictures};
