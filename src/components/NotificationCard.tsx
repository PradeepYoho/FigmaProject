import React from 'react';
import cardIcon from '../assets/cardIcon.png';
import rectangleImage from '../assets/rectangleimage.png';

interface SummaryCardProps {
  title: string;
  value: number;
  icon: string;
  imageUrl: string;
}

const SummaryCard: React.FC<SummaryCardProps> = ({ title, value, icon, imageUrl }) => {
  return (
    <div
      className="relative bg-cover bg-center rounded-2xl overflow-hidden w-full min-h-[140px] flex before:absolute before:inset-0 before:rounded-2xl"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="relative z-10 p-4 w-full flex flex-col justify-between text-[#0E2B56]">
        <div className="flex items-center gap-2">
          <img src={icon} alt="Icon" className="w-8 h-8" />
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <p className="text-3xl font-bold mt-4">{value}</p>
      </div>
    </div>
  );
};

const NotificationSummary: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-4 sm:px-6 md:px-10 mt-10">
      <SummaryCard
        title="Total Notifications"
        value={0}
        icon={cardIcon}
        imageUrl={rectangleImage}
      />
      <SummaryCard
        title="Seen Notifications"
        value={0}
        icon={cardIcon}
        imageUrl={rectangleImage}
      />
      <SummaryCard
        title="Unseen Notifications"
        value={0}
        icon={cardIcon}
        imageUrl={rectangleImage}
      />
    </div>
  );
};

export default NotificationSummary;
