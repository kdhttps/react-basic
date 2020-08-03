import dev from './dev.json';
import prod from './prod.json';

const config = process.env.REACT_ENV === 'production'
    ? prod
    : dev;
    
export default {
    ...config,
    // Add Common here
};