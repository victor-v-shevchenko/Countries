using Countries.Db.Entities;
using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace Countries.Repositories
{
    public interface ICityRepository
    {
        Task<IEnumerable<City>> GetAll(Guid countryId, CancellationToken token);
    }
}