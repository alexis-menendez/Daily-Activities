interface Charge {
  // Charges can only be billed at a fixed or hourly rate, so we use a union type for the two options.
  billed: 'fixed' | 'hourly';
  //Since `hours` and `hourlyRate` only affect hourly charges, we make them optional.
  hours?: number;
  hourlyRate?: number;
  price: number;
}

export default Charge;
