using Countries.Dto;
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace Countries.Services
{
    public interface ICountryService
    {
        Task<IEnumerable<CountryDto>> GetAll(CancellationToken token);
        Task<IEnumerable<CityDto>> GetAllCitiesByCountry(Guid countryId, CancellationToken token);
    }
}