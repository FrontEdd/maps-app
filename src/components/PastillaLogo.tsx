import Pastilla from '../Pastilla.jpg';

export const PastillaLogo = () => {
  return (
    <img
        src={ Pastilla }
        alt="PastillaLogo"
        style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            width: '60px',
            borderRadius: '50%'
        }}
    />
  )
}
