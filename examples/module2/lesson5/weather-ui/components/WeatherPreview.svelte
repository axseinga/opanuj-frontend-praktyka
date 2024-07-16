<script lang="ts">
  import { onMount } from 'svelte';
  import { LocationWeather, LocationWeatherAPIData, DailyWeather } from '../models/LocationWeather';
  import DailyWeatherComponent from './DailyWeather.svelte';

  export let weather: LocationWeatherAPIData;
  let normalizedWeather: LocationWeather | null = null;

  function convertWeatherDateFormat(date: string): string {
    const [month, day, year] = date.split("-");
    return `${day}-${month}-${year}`;
  }


  function normalizeLocationWeather(data: LocationWeatherAPIData): LocationWeather {
    let weatherDetails: DailyWeather[] = [];

    if (!Array.isArray(data.weatherDetails)) {
      weatherDetails = data.weatherDetails.Weather.map((weatherItem) => ({
        date: convertWeatherDateFormat(weatherItem.date),
        type: weatherItem.type,
        averageTemperature: weatherItem.average_temperature,
      }));
    } else {
      weatherDetails = data.weatherDetails;
    }

    return {
      city: data.city,
      country: data.country,
      weatherDetails,
    };
  }

  onMount(() => {
    normalizedWeather = normalizeLocationWeather(weather);
  });
</script>

<div>
  {#if normalizedWeather}
    <h2 class="text-2xl py-4">
      {normalizedWeather.city}, {normalizedWeather.country}
    </h2>
    <ul class="space-y-4">
      {#each normalizedWeather.weatherDetails as dailyWeather}
        <DailyWeatherComponent {dailyWeather} />
      {/each}
    </ul>
  {/if}
</div>