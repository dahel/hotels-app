export interface Hotel {
		id: string,
		name: string,
		description: string,
		address1: string,
		address2: string,
		postcode: string,
		town: string,
		country: string,
		countryCode: string,
		starRating: string,
		facilities: { code: string }[],
		telephone: string,
		email: string,
		images: { url: string }[],
		checkInHours: string,
		checkInMinutes: string,
		checkOutHours: string,
		checkOutMinutes: string,
		position: {
			latitude: number,
			longitude: number,
			timezone: string,
		}
}

export interface Room {
  id: string,
			name: string,
			shortDescription: string,
			longDescription:string,
			occupancy: {
				maxAdults: number,
				maxChildren: number,
				maxOverall: number
			},
			disabledAccess: false,
			bedConfiguration: string,
			images: 
				{
					url: string,
					alt: string,
				}[]
			,
			facilities: {
					code: string,
					name: string,
				}[]
}

interface RoomRatePlan  {
  id: string,
  shortDescription: string,
  longDescription: string,
  prePayment: string,
  cancellationPolicy: {
    name: string,
    text: string,
    penalty: string,
    applicable: string,
    hour: string
  }
}

export interface HotelDetails {
    rooms: Room[],
    ratePlans: RoomRatePlan[]
}

export interface HotelWithDetails  extends Hotel, HotelDetails {}