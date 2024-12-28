import Card from 'react-bootstrap/Card';

function Cardpo({ id, title, imageSrc, desc }) {
    return (
        <Card style={{ width: '18rem' }}>
            <div style={{ height: '250px' }}>
                <Card.Img height='100%' width='100%' variant="top" src={imageSrc} alt={`Image for ${title}`} />
            </div>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text className='description'>
                    {desc}
                </Card.Text>
                <Card.Text className='id'>
                    {id}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Cardpo;
