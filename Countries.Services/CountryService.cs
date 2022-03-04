using Countries.Dto;
using Countries.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Countries.Services
{
    public class CountryService : ICountryService
    {
        private readonly ICountryRepository countryRepository;
        private readonly ICityRepository cityRepository;

        public CountryService(ICountryRepository countryRepository, ICityRepository cityRepository)
        {
            this.countryRepository = countryRepository;
            this.cityRepository = cityRepository;
        }

        public async Task<IEnumerable<CountryDto>> GetAll(CancellationToken token)
        {
            var entities = await countryRepository.GetAll(token);
            return entities.Select(entity => new CountryDto { Id = entity.Id, Name = entity.Name });
        }

        public async Task<IEnumerable<CityDto>> GetAllCitiesByCountry(Guid countryId, CancellationToken token)
        {
            var entities = await cityRepository.GetAll(countryId, token);
            return entities.Select(entity => new CityDto { Id = entity.Id, Name = entity.Name });
        }
    }
}
