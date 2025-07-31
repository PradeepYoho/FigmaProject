import { Link } from "react-router-dom";

type Plan = {
  title: string;
  subtitle: string;
  price: string;
  features: string[];
  active: boolean;
};

const plans: Plan[] = [
  {
    title: 'Basic Plan – Free',
    subtitle: 'The Plan is for everyone',
    price: '₹0 / Monthly',
    features: [
      'Admins: 5',
      'Students: 5',
      'Teachers: 10',
      'Batches: 5',
      'Courses: 5',
      'Classes: 30',
    ],
    active: true,
  },
  {
    title: 'Premium',
    subtitle: 'The Plan is for premium plan',
    price: '₹15000 / Monthly',
    features: [
      'Admins: 700',
      'Students: 120',
      'Teachers: 10',
      'Batches: 01',
      'Courses: 45',
      'Classes: 50',
    ],
    active: true,
  },
  {
    title: 'Basic Plan – Free',
    subtitle: 'The Plan is for exclusive plan',
    price: '₹12000 / Monthly',
    features: [],
    active: true,
  },
];

const SubscriptionPlans = () => {
  return (
    <section className="min-h-screen p-10 mt-2">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-white text-xl font-semibold">Subscriptions Plan</h2>
       <Link
  to="/add-institute"
  className="bg-[#0d2646] text-white px-4 py-2 rounded-[10px] inline-block"
>
  + Add Institute
</Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`bg-white/10 backdrop-blur-lg rounded-xl p-6 text-white shadow-xl ${
              index === 2 ? 'h-[400px]' : ''
            }`}
          >
          
            <div className="mb-4 h-32 bg-white rounded-lg"></div>

           
            <div>
              <h3 className="text-lg font-semibold">{plan.title}</h3>
              <p className="text-sm text-white/70">{plan.subtitle}</p>
              <p className="text-2xl font-bold mt-2">{plan.price}</p>

              <div className="mt-4">
                <h4 className="text-sm font-medium mb-2">FEATURES</h4>
{plan.features.length > 0 && (
  <ul className="text-sm space-y-1 text-white/90">
    {plan.features.map((feature, i) => (
      <li key={i}>• {feature}</li>
    ))}
  </ul>
)}
              </div>
            </div>

          
            <div className="flex justify-between items-center mt-6">
              <button className="bg-white text-black text-sm font-medium px-4 py-1 rounded-full">
                Active
              </button>
              <button className="text-white text-2xl">⋯</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SubscriptionPlans;
