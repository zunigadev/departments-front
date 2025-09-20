import { Card, Typography } from 'antd';

const { Title } = Typography;

interface PlaceholderPageProps {
  title: string;
  description?: string;
}

export const PlaceholderPage = ({ title, description }: PlaceholderPageProps) => (
  <div style={{ padding: '0 24px' }}>
    <Title level={2}>{title}</Title>
    <Card>
      <p>{description || `Página ${title.toLowerCase()} en construcción...`}</p>
    </Card>
  </div>
);