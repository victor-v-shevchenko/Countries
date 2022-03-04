using Countries.Db;
using Countries.Db.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Countries.Repositories
{
    public class CityRepository : ICityRepository
    {
        private readonly CountriesDbContext dbContext;

        public CityRepository(CountriesDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public async Task<IEnumerable<City>> GetAll(Guid countryId, CancellationToken token)
        {
            return await this.dbContext.Cities.Where(city => city.CountryId == countryId).ToListAsync(token);
        }
    }
}
