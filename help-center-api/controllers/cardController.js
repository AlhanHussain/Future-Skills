import Card from '../models/card.js';

// Create a new card
export const createCard = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newCard = new Card({ title, description });
    await newCard.save();
    res.status(201).json(newCard);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all cards
export const getAllCards = async (req, res) => {
  try {
    const cards = await Card.find();
    res.status(200).json(cards);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a card by title
export const getCardByTitle = async (req, res) => {
  try {
    const card = await Card.findOne({ title: req.params.title });
    if (!card) {
      return res.status(404).json({ message: 'Card not found' });
    }
    res.status(200).json(card);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
