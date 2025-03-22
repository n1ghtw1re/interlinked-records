
import React from 'react';

const EventsContent: React.FC = () => {
  const events = [
    {
      id: '001',
      title: 'SUBTERRANEAN FREQUENCIES',
      date: '2023-12-15',
      venue: 'The Vault, Berlin',
      artists: ['Void Protocol', 'Modular Ghost', 'Glass Structures'],
      description: 'Deep dub techno and experimental electronics in an underground concrete space.',
      time: '23:00 - 08:00'
    },
    {
      id: '002',
      title: 'HARDWARE SESSIONS',
      date: '2024-01-20',
      venue: 'Circuit Laboratory, London',
      artists: ['Signal Path', 'Frequency Modulator', 'Analog Interface'],
      description: 'Live hardware jams and modular synthesis performances.',
      time: '21:00 - 03:00'
    },
    {
      id: '003',
      title: 'INTERLINKED SHOWCASE',
      date: '2024-02-10',
      venue: 'Industrial Complex, Detroit',
      artists: ['Full label roster', 'Special guests TBA'],
      description: 'Label showcase featuring new releases and special collaborative performances.',
      time: '22:00 - 06:00'
    }
  ];

  return (
    <div className="max-h-[calc(100vh-16rem)] overflow-hidden">
      <h2 className="text-2xl font-display tracking-wider text-primary mb-6">_EVENTS</h2>
      
      <div className="space-y-6">
        {events.map((event) => (
          <div key={event.id} className="border border-border hover:border-primary transition-colors duration-150">
            <div className="border-b border-border p-4">
              <div className="flex justify-between items-start">
                <h3 className="text-lg text-secondary font-display tracking-wider">{event.title}</h3>
                <div className="text-xs border border-border px-2 py-1">
                  {new Date(event.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })}
                </div>
              </div>
              <div className="mt-2">
                <div className="text-sm">{event.venue}</div>
                <div className="text-xs text-muted-foreground">{event.time}</div>
              </div>
            </div>
            
            <div className="p-4 border-b border-border">
              <h4 className="text-xs mb-2 text-muted-foreground">FEATURING:</h4>
              <ul className="text-xs space-y-1">
                {event.artists.map((artist, index) => (
                  <li key={index} className="flex">
                    <span className="text-primary mr-2">{`>`}</span>
                    <span>{artist}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="p-4 text-xs text-muted-foreground">
              {event.description}
            </div>
          </div>
        ))}
        
        <div className="border border-primary p-4 mt-8">
          <div className="text-sm">
            SUBSCRIBE TO OUR MAILING LIST FOR EXCLUSIVE EVENT INVITATIONS
          </div>
          <div className="text-xs text-muted-foreground mt-2">
            EVENTS@INTERLINKED-RECORDS.NET
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsContent;
