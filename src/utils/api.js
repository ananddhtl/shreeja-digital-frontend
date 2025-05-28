
const API_BASE_URL = 'http://127.0.0.1:8000/api'; 

export const getTestimonials = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/testimonials`);
    const json = await res.json();
    return json.data;
  } catch (error) {
    console.error('Failed to fetch testimonials:', error);
    return [];
  }
};
