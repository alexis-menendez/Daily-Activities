interface Charge {
  // TODO: What type is the `billed` key being set as?
  billed: 'fixed' | 'hourly';
  // TODO: Why are these keys optional?
  hours?: number;
  hourlyRate?: number;
  price: number;
}

export default Charge;
