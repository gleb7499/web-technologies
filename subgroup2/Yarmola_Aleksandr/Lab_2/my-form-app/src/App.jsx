import { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  Select,
  MenuItem,
  InputLabel,
  TextareaAutosize,
  Box,
  Input,
} from "@mui/material";

function App() {
  const [showSection, setShowSection] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    group: "",
    color: "",
    year: [],
    html: "",
    css: "",
    headings: "",
    file: null,
    date: "",
    counter: 0,
    favorite: "",
  });

  // Обновление данных формы
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        year: checked
          ? [...prev.year, value]
          : prev.year.filter((y) => y !== value),
      }));
    } else if (type === "file") {
      setFormData((prev) => ({
        ...prev,
        file: event.target.files[0],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // Отправка формы
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Форма отправлена:", formData);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Оценка знаний студента
      </Typography>

      <form onSubmit={handleSubmit}>
        {/* ФИО */}
        <TextField
          label="ФИО студента"
          fullWidth
          required
          name="name"
          value={formData.name}
          onChange={handleChange}
          margin="normal"
        />

        {/* Группа */}
        <TextField
          label="Группа"
          fullWidth
          required
          name="group"
          value={formData.group}
          onChange={handleChange}
          margin="normal"
        />

        {/* Любимый цвет */}
        <FormControl margin="normal">
          <FormLabel>Ваш любимый цвет *</FormLabel>
          <RadioGroup name="color" value={formData.color} onChange={handleChange}>
            <FormControlLabel value="Красный" control={<Radio />} label="Красный" />
            <FormControlLabel value="Зелёный" control={<Radio />} label="Зелёный" />
            <FormControlLabel value="Синий" control={<Radio />} label="Синий" />
            <FormControlLabel value="Другой" control={<Radio />} label="Другой" />
          </RadioGroup>
        </FormControl>

        {/* Интересный год обучения */}
        <FormControl margin="normal">
          <FormLabel>Какой год обучения наиболее интересный? *</FormLabel>
          <Box>
            {["Первый", "Второй", "Третий", "Четвёртый"].map((year) => (
              <FormControlLabel
                key={year}
                control={<Checkbox />}
                label={year}
                value={year}
                checked={formData.year.includes(year)}
                onChange={handleChange}
                name="year"
              />
            ))}
          </Box>
        </FormControl>

        {/* Определение HTML */}
        <FormLabel>Что такое HTML? *</FormLabel>
        <TextareaAutosize
          minRows={2}
          placeholder="Определите HTML"
          name="html"
          value={formData.html}
          onChange={handleChange}
          style={{ width: "100%", marginBottom: "16px" }}
        />

        {/* Определение CSS */}
        <FormLabel>Определение CSS *</FormLabel>
        <TextareaAutosize
          minRows={2}
          placeholder="Определите CSS"
          name="css"
          value={formData.css}
          onChange={handleChange}
          style={{ width: "100%", marginBottom: "16px" }}
        />

        {/* Количество заголовков */}
        <TextField
          label="Сколько основных заголовков в HTML?"
          type="number"
          fullWidth
          required
          name="headings"
          value={formData.headings}
          onChange={handleChange}
          margin="normal"
          inputProps={{ min: 1, max: 10 }}
        />

        {/* Файл */}
        <FormControl margin="normal">
          <FormLabel>Загрузите файл с примером работы *</FormLabel>
          <Input type="file" name="file" onChange={handleChange} />
        </FormControl>

        {/* Дата последнего теста */}
        <TextField
          label="Дата последнего тестирования"
          type="date"
          fullWidth
          required
          name="date"
          value={formData.date}
          onChange={handleChange}
          margin="normal"
          InputLabelProps={{ shrink: true }}
        />

        {/* Количество вопросов */}
        <TextField
          label="Сколько вопросов в тесте?"
          type="number"
          fullWidth
          required
          name="counter"
          value={formData.counter}
          onChange={handleChange}
          margin="normal"
          inputProps={{ min: 1, max: 100 }}
        />

        {/* Скрываемая секция */}
        <Button onClick={() => setShowSection(!showSection)} sx={{ mt: 2 }}>
          {showSection ? "Скрыть" : "Показать"} секцию
        </Button>

        {showSection && (
          <FormControl fullWidth margin="normal">
            <InputLabel>Ваш любимый предмет</InputLabel>
            <Select
              name="favorite"
              value={formData.favorite}
              onChange={handleChange}
            >
              <MenuItem value="Математика">Математика</MenuItem>
              <MenuItem value="Физика">Физика</MenuItem>
              <MenuItem value="Информатика">Информатика</MenuItem>
              <MenuItem value="Литература">Литература</MenuItem>
            </Select>
          </FormControl>
        )}

        {/* Кнопка отправки */}
        <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
          Отправить форму
        </Button>
      </form>
    </Container>
  );
}

export default App;
